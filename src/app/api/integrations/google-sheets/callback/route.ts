import { NextRequest, NextResponse } from 'next/server';

interface GoogleTokenResponse {
    access_token: string;
    token_type: string;
    expires_in: number;
    refresh_token?: string;
    scope?: string;
    id_token?: string;
}

interface GoogleTokenErrorResponse {
    error: string;
    error_description?: string;
}

export async function GET(request: NextRequest) {
    try {
        const searchParams = new URL(request.url).searchParams;
        const code = searchParams.get('code');
        const state = searchParams.get('state');
        const error = searchParams.get('error');
        const errorDescription = searchParams.get('error_description');

        if (error) {
            console.error('Google OAuth error:', error, errorDescription);
            return NextResponse.redirect(
                `${process.env.NEXT_PUBLIC_APP_URL}/csv-manager?integration=google-sheets&status=error&message=${encodeURIComponent(errorDescription || error)}`
            );
        }

        if (!code || !process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET || !process.env.NEXT_PUBLIC_APP_URL) {
            const missingParams = [
                !code && 'authorization code',
                !process.env.GOOGLE_CLIENT_ID && 'client ID',
                !process.env.GOOGLE_CLIENT_SECRET && 'client secret',
                !process.env.NEXT_PUBLIC_APP_URL && 'app URL'
            ].filter(Boolean).join(', ');
            
            console.error(`Missing required parameters: ${missingParams}`);
            return NextResponse.redirect(
                `${process.env.NEXT_PUBLIC_APP_URL || ''}/csv-manager?integration=google-sheets&status=error&message=${encodeURIComponent('Configuration error')}`
            );
        }

        // Exchange the authorization code for an access token
        const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                client_id: process.env.GOOGLE_CLIENT_ID,
                client_secret: process.env.GOOGLE_CLIENT_SECRET,
                code,
                grant_type: 'authorization_code',
                redirect_uri: `${process.env.NEXT_PUBLIC_APP_URL}/api/integrations/google-sheets/callback`,
            }).toString(),
        });

        const responseData = await tokenResponse.json() as GoogleTokenResponse | GoogleTokenErrorResponse;

        if (!tokenResponse.ok || 'error' in responseData) {
            const errorData = responseData as GoogleTokenErrorResponse;
            console.error('Token exchange error:', errorData);
            return NextResponse.redirect(
                `${process.env.NEXT_PUBLIC_APP_URL}/csv-manager?integration=google-sheets&status=error&message=${encodeURIComponent(errorData.error_description || 'Failed to exchange authorization code')}`
            );
        }

        const tokenData = responseData as GoogleTokenResponse;

        // Here you would store the token data securely
        // For example:
        // await prisma.integration.upsert({
        //     where: { userId_type: { userId, type: 'google-sheets' } },
        //     update: { accessToken: tokenData.access_token },
        //     create: { userId, type: 'google-sheets', accessToken: tokenData.access_token }
        // });

        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_APP_URL}/csv-manager?integration=google-sheets&status=success`);
    } catch (error) {
        console.error('Google Sheets callback error:', error);
        const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
        return NextResponse.redirect(
            `${process.env.NEXT_PUBLIC_APP_URL || ''}/csv-manager?integration=google-sheets&status=error&message=${encodeURIComponent(errorMessage)}`
        );
    }
} 