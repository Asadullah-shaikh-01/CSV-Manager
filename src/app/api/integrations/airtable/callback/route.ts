import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    try {
        const searchParams = new URL(request.url).searchParams;
        const code = searchParams.get('code');
        const state = searchParams.get('state');
        const error = searchParams.get('error');

        if (error) {
            console.error('Airtable OAuth error:', error);
            return NextResponse.json({ error: 'Authentication failed' }, { status: 400 });
        }

        if (!code) {
            return NextResponse.json({ error: 'No authorization code received' }, { status: 400 });
        }

        // Exchange the authorization code for an access token
        const tokenResponse = await fetch('https://airtable.com/oauth2/v1/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: `Basic ${Buffer.from(`${process.env.AIRTABLE_CLIENT_ID}:${process.env.AIRTABLE_CLIENT_SECRET}`).toString('base64')}`,
            },
            body: new URLSearchParams({
                grant_type: 'authorization_code',
                code,
                redirect_uri: `${process.env.NEXT_PUBLIC_APP_URL}/api/integrations/airtable/callback`,
            }).toString(),
        });

        if (!tokenResponse.ok) {
            const errorData = await tokenResponse.json();
            console.error('Token exchange error:', errorData);
            return NextResponse.json(
                { error: 'Failed to exchange authorization code for token' },
                { status: 500 }
            );
        }

        const tokenData = await tokenResponse.json();

        // Store the access token securely (you should implement this based on your needs)
        // For example, you might want to store it in your database associated with the user

        // Redirect back to the application
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_APP_URL}/csv-manager?integration=airtable&status=success`);
    } catch (error: any) {
        console.error('Airtable callback error:', error);
        return NextResponse.redirect(
            `${process.env.NEXT_PUBLIC_APP_URL}/csv-manager?integration=airtable&status=error&message=${encodeURIComponent(error.message)}`
        );
    }
} 