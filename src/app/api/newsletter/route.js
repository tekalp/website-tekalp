import { NextResponse } from 'next/server';

export async function POST(request) {
    const { email, phone, firstname, lastname, enterprise } = await request.json();
    
    if (!email || !phone || !lastname) {
        return NextResponse.json({ success: false, error: 'Email requis.' }, { status: 400 });
    }

    const API_KEY = process.env.KLAVIYO_API_KEY;
    const LIST_ID = process.env.KLAVIYO_LIST_ID;

    try {
        const res = await fetch(`https://a.klaviyo.com/api/lists/${LIST_ID}/profiles/?fields[profile]=email&filter=equals(email,%22${email}%22)`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "revision": '2024-07-15',
                'Authorization': `Klaviyo-API-Key ${API_KEY}`,
            },
        });
        const list = await res.json();
        
        if(list?.data?.length > 0) {
            return NextResponse.json({ success: false, error: 'Email déjà abonné.' }, { status: 400 });
        }

        const res2 = await fetch(`https://a.klaviyo.com/api/profile-subscription-bulk-create-jobs/`, {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                "revision": '2024-07-15',
                'Authorization': `Klaviyo-API-Key ${API_KEY}`,
            },
            body: JSON.stringify({
                data: {
                  type: 'profile-subscription-bulk-create-job',
                  attributes: {
                    profiles: {
                      data: [
                        {
                          type: 'profile',
                          attributes: {
                            email: email
                          }
                        }
                      ]
                    },
                    historical_import: false
                  },
                  relationships: {list: {data: {type: 'list', id: LIST_ID}}}
                }
              })
        });
        if (res2.status === 202) {
            return NextResponse.json({ success: true }, { status: 200 });
        } else {
            return NextResponse.json({ success: false, error: data.errors ? data.errors[0].detail : "Une erreur est survenue." }, { status: 400 });
        }
    } catch (e) {
        return NextResponse.json({ message: 'Une erreur est survene', error: e.message }, { status: 500 });
    }
}