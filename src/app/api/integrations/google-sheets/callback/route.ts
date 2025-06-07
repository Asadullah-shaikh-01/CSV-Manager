import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    try {
        const searchParams = new URL(request.url).searchParams;
        const code = searchParams.get('code');
        const state = searchParams.get('state');
        const error = searchParams.get('error');

        if (error) {
            console.error('Google OAuth error:', error);
            return NextResponse.json({ error: 'Authentication failed' }, { status: 400 });
        }

        if (!code) {
            return NextResponse.json({ error: 'No authorization code received' }, { status: 400 });
        }

        // Exchange the authorization code for an access token
        const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                client_id: process.env.GOOGLE_CLIENT_ID!,
                client_secret: process.env.GOOGLE_CLIENT_SECRET!,
                code,
                grant_type: 'authorization_code',
                redirect_uri: `${process.env.NEXT_PUBLIC_APP_URL}/api/integrations/google-sheets/callback`,
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
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_APP_URL}/csv-manager?integration=google-sheets&status=success`);
    } catch (error: any) {
        console.error('Google Sheets callback error:', error);
        return NextResponse.redirect(
            `${process.env.NEXT_PUBLIC_APP_URL}/csv-manager?integration=google-sheets&status=error&message=${encodeURIComponent(error.message)}`
        );
    }
} 