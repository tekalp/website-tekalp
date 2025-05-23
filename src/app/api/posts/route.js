import { NextResponse } from 'next/server';
// import { get } from '@vercel/edge-config';

// async function refreshLinkedInToken(refresh) {
//   try {
//     const response = await fetch("https://www.linkedin.com/oauth/v2/accessToken", {
//       method: "POST",
//       headers: { "Content-Type": "application/x-www-form-urlencoded" },
//       body: new URLSearchParams({
//         grant_type: "refresh_token",
//         client_id: process.env.LINKEDIN_CLIENT_ID,
//         client_secret: process.env.LINKEDIN_CLIENT_SECRET,
//         refresh_token: refresh,
//       }),
//     });
//     const data = await response.json();
//     console.log(data);
    
//     if (!response.ok) {
//       console.error("Failed to refresh LinkedIn token:", data);
//       return null;
//     }

//     return data;
//   } catch (error) {
//     console.error("Error refreshing LinkedIn token:", error);
//     return null;
//   }
// }

// async function getLinkedInAccessToken() {
//   const vercel_token = await get("linkedin-access-token");
//   let token = vercel_token?.access_token
//   let refresh = vercel_token?.refresh_token
//   console.log(token, refresh);
  

//   if (token) {
//     console.log("No LinkedIn access token found, refreshing...");
//     token = await refreshLinkedInToken(refresh);
    
//     if (!token) {
//       return null;
//     }
//   }

//   return token;
// }


export async function GET() {

  // let token = await getLinkedInAccessToken();
  // const vercel_token = await get("linkedin-access-token");

  // if (!vercel_token.access_token) {
  //   return NextResponse.json({ error: 'Token not provided' }, { status: 401 });
  // }

  // const update = await fetch(`https://api.vercel.com/v1/edge-config/${process.env.EDGE_CONFIG_ID}/items`, {
  //   method: "PATCH",
  //   headers: {
  //     "Authorization": `Bearer ${process.env.EDGE_TOKEN}`,
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     items: [
  //       {
  //         operation: "upsert",
  //         key: "linkedin-access-token",
  //         value: token,
  //       },
  //     ],
  //   }),
  // });

  // const result = await update.json();
  // console.log(result);
  
// urn%3Ali%3Aorganization%3A101312686
  try {    
    // const response = await fetch(`https://api.linkedin.com/v2/posts?q=authors&authors=List(urn%3Ali%3Aorganization%3A${process.env.LINKEDIN_ID})&count=6`, {
    //   method:'GET',
    //   headers: {
    //     // "Authorization": `Bearer ${vercel_token.access_token}`,
    //     "Authorization": `Bearer ${process.env.LINKEDIN_ACCESS_TOKEN}`,
    //     "X-Restli-Protocol-Version": "2.0.0"
    //   },
    // });

// s7E1I2aFvT
    // const response2 = await fetch(`https://api.linkedin.com/v2/me`, {
    //   method:'GET',
    //   headers: {
    //     "Authorization": `Bearer ${process.env.LINKEDIN_ACCESS_TOKEN}`,
    //     // "X-Restli-Protocol-Version": "2.0.0"
    //   },
    // });

    //   const test = await response2.json()
    //   console.log(test);
      

    // const response = await fetch(`https://api.linkedin.com/v2/shares?q=owners&owners=urn%3Ali%3Aperson%3As7E1I2aFvT`, {
    //   method:'GET',
    //   headers: {
    //     "Authorization": `Bearer ${process.env.LINKEDIN_ACCESS_TOKEN}`,
    //     "X-Restli-Protocol-Version": "2.0.0"
    //   },
    // });
    
    const response = await fetch(`GET https://api.linkedin.com/rest/posts?author=urn%3Ali%3Aorganization%3A101312686&q=author&count=10&sortBy=LAST_MODIFIED`, {
      method:'GET',
      headers: {
        "Authorization": `Bearer ${process.env.LINKEDIN_ACCESS_TOKEN}`,
        "X-Restli-Protocol-Version": "2.0.0",
        "LinkedIn-Version": "202405"
      },
    });
    
    const posts = await response.json()
    
    return NextResponse.json({ data: posts }, { status: 200 })
  } catch (error) {
    console.error('Error fetching LinkedIn posts:', error);
    return NextResponse.json({ error: 'Failed to fetch LinkedIn posts' }, { status: 500 });
  }
}