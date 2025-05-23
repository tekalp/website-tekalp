import { NextResponse } from 'next/server';
import { get } from '@vercel/edge-config';

async function refreshLinkedInToken(refresh) {
    try {
      const response = await fetch("https://www.linkedin.com/oauth/v2/accessToken", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          grant_type: "refresh_token",
          client_id: process.env.LINKEDIN_CLIENT_ID,
          client_secret: process.env.LINKEDIN_CLIENT_SECRET,
          refresh_token: refresh,
        }),
      });
      const data = await response.json();
      
      if (!response.ok) {
        console.error("Failed to refresh LinkedIn token:", data);
        return null;
      }
  
      return data;
    } catch (error) {
      console.error("Error refreshing LinkedIn token:", error);
      return null;
    }
  }
  
  async function getLinkedInAccessToken() {
    const vercel_token = await get("linkedin-access-token");
    let token = vercel_token?.access_token
    let refresh = vercel_token?.refresh_token
    if (token) {
        token = await refreshLinkedInToken(refresh);
      if (!token) {
        return null;
      }
    }
    return token;
  }


export async function GET() {

  let token = await getLinkedInAccessToken();
  if (!token) {
    return NextResponse.json({ error: 'Token not provided' }, { status: 401 });
  }
 
  try {    
    const update = await fetch(`https://api.vercel.com/v1/edge-config/${process.env.EDGE_CONFIG_ID}/items`, {
        method: "PATCH",
        headers: {
          "Authorization": `Bearer ${process.env.EDGE_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: [
            {
              operation: "upsert",
              key: "linkedin-access-token",
              value: token,
            },
          ],
        }),
      });
    
      const result = await update.json();
      
    return NextResponse.json({ message:"Renouvellement effectué !" },{ status: 200 })
  } catch (error) {
    console.error('Error fetching LinkedIn posts:', error);
    return NextResponse.json({ error: 'Failed to fetch LinkedIn posts' }, { status: 500 });
  }
}