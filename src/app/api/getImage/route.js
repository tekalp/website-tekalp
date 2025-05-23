import { NextResponse } from "next/server";

export async function GET() {

    let token = process.env.LINKEDIN_ACCESS_TOKEN

  if (!token) {
    return NextResponse.json({ error: 'Token not provided' }, { status: 401 });
  }

  try {    
    const response = await fetch(`https://api.linkedin.com/v2/assets/urn:li:digitalmediaAsset:D4E05AQGwDJOzsshxNA`, {
      method:'GET',
      headers: {
        "Authorization": `Bearer ${process.env.LINKEDIN_ACCESS_TOKEN}`,
        // "X-Restli-Protocol-Version": "2.0.0"
      },
    });
    const image = await response.json()
    return NextResponse.json({ data: image }, { status: 200 })
  } catch (error) {
    console.error('Error fetching LinkedIn posts:', error);
    return NextResponse.json({ error: 'Failed to fetch LinkedIn posts' }, { status: 500 });
  }
}