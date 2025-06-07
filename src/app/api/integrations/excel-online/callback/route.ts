import { NextRequest, NextResponse } from 'next/server';

interface MicrosoftTokenResponse {
    access_token: string;
    token_type: string;
    expires_in: number;
    scope: string;
    refresh_token?: string;
    id_token?: string;
}

interface MicrosoftTokenErrorResponse {
    error: string;
    error_description?: string;
    error_codes?: number[];
    timestamp?: string;
    trace_id?: string;
    correlation_id?: string;
}

export async function GET(request: NextRequest) {
    try {
        const searchParams = new URL(request.url).searchParams;
        const code = searchParams.get('code');
        const state = searchParams.get('state');
        const error = searchParams.get('error');
        const errorDescription = searchParams.get('error_description');

        if (error) {
            console.error('Microsoft OAuth error:', error, errorDescription);
            return NextResponse.redirect(
                `${process.env.NEXT_PUBLIC_APP_URL}/csv-manager?integration=excel-online&status=error&message=${encodeURIComponent(errorDescription || error)}`
            );
        }

        if (!code || !process.env.MICROSOFT_CLIENT_ID || !process.env.MICROSOFT_CLIENT_SECRET || !process.env.NEXT_PUBLIC_APP_URL) {
            const missingParams = [
                !code && 'authorization code',
                !process.env.MICROSOFT_CLIENT_ID && 'client ID',
                !process.env.MICROSOFT_CLIENT_SECRET && 'client secret',
                !process.env.NEXT_PUBLIC_APP_URL && 'app URL'
            ].filter(Boolean).join(', ');
            
            console.error(`Missing required parameters: ${missingParams}`);
            return NextResponse.redirect(
                `${process.env.NEXT_PUBLIC_APP_URL || ''}/csv-manager?integration=excel-online&status=error&message=${encodeURIComponent('Configuration error')}`
            );
        }

        // Exchange the authorization code for an access token
        const tokenResponse = await fetch('https://login.microsoftonline.com/common/oauth2/v2.0/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                client_id: process.env.MICROSOFT_CLIENT_ID,
                client_secret: process.env.MICROSOFT_CLIENT_SECRET,
                code,
                grant_type: 'authorization_code',
                redirect_uri: `${process.env.NEXT_PUBLIC_APP_URL}/api/integrations/excel-online/callback`,
            }).toString(),
        });

        const responseData = await tokenResponse.json() as MicrosoftTokenResponse | MicrosoftTokenErrorResponse;

        if (!tokenResponse.ok || 'error' in responseData) {
            const errorData = responseData as MicrosoftTokenErrorResponse;
            console.error('Token exchange error:', errorData);
            const errorMessage = errorData.error_description || errorData.error || 'Failed to exchange authorization code';
            return NextResponse.redirect(
                `${process.env.NEXT_PUBLIC_APP_URL}/csv-manager?integration=excel-online&status=error&message=${encodeURIComponent(errorMessage)}`
            );
        }

        const tokenData = responseData as MicrosoftTokenResponse;

        // Here you would store the token data securely
        // For example:
        // await prisma.integration.upsert({
        //     where: { userId_type: { userId, type: 'excel-online' } },
        //     update: { accessToken: tokenData.access_token },
        //     create: { userId, type: 'excel-online', accessToken: tokenData.access_token }
        // });

        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_APP_URL}/csv-manager?integration=excel-online&status=success`);
    } catch (error) {
        console.error('Excel Online callback error:', error);
        const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
        return NextResponse.redirect(
            `${process.env.NEXT_PUBLIC_APP_URL || ''}/csv-manager?integration=excel-online&status=error&message=${encodeURIComponent(errorMessage)}`
        );
    }
} 