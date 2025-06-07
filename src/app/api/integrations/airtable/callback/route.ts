import { NextRequest, NextResponse } from 'next/server';

interface TokenResponse {
    access_token: string;
    token_type: string;
    expires_in: number;
    refresh_token?: string;
    scope?: string;
}

interface TokenErrorResponse {
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
            console.error('Airtable OAuth error:', error, errorDescription);
            return NextResponse.redirect(
                `${process.env.NEXT_PUBLIC_APP_URL}/csv-manager?integration=airtable&status=error&message=${encodeURIComponent(errorDescription || error)}`
            );
        }

        if (!code || !process.env.AIRTABLE_CLIENT_ID || !process.env.AIRTABLE_CLIENT_SECRET || !process.env.NEXT_PUBLIC_APP_URL) {
            const missingParams = [
                !code && 'authorization code',
                !process.env.AIRTABLE_CLIENT_ID && 'client ID',
                !process.env.AIRTABLE_CLIENT_SECRET && 'client secret',
                !process.env.NEXT_PUBLIC_APP_URL && 'app URL'
            ].filter(Boolean).join(', ');
            
            console.error(`Missing required parameters: ${missingParams}`);
            return NextResponse.redirect(
                `${process.env.NEXT_PUBLIC_APP_URL || ''}/csv-manager?integration=airtable&status=error&message=${encodeURIComponent('Configuration error')}`
            );
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

        const responseData = await tokenResponse.json() as TokenResponse | TokenErrorResponse;

        if (!tokenResponse.ok || 'error' in responseData) {
            const errorData = responseData as TokenErrorResponse;
            console.error('Token exchange error:', errorData);
            return NextResponse.redirect(
                `${process.env.NEXT_PUBLIC_APP_URL}/csv-manager?integration=airtable&status=error&message=${encodeURIComponent(errorData.error_description || 'Failed to exchange authorization code')}`
            );
        }

        const tokenData = responseData as TokenResponse;

        // Here you would store the token data securely
        // For example:
        // await prisma.integration.upsert({
        //     where: { userId_type: { userId, type: 'airtable' } },
        //     update: { accessToken: tokenData.access_token },
        //     create: { userId, type: 'airtable', accessToken: tokenData.access_token }
        // });

        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_APP_URL}/csv-manager?integration=airtable&status=success`);
    } catch (error) {
        console.error('Airtable callback error:', error);
        const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
        return NextResponse.redirect(
            `${process.env.NEXT_PUBLIC_APP_URL || ''}/csv-manager?integration=airtable&status=error&message=${encodeURIComponent(errorMessage)}`
        );
    }
} 