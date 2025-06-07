import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    try {
        // Check if Google credentials exist
        if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
            return NextResponse.json(
                { error: "Google Sheets credentials not configured" },
                { status: 500 }
            );
        }

        // Generate OAuth URL for Google Sheets
        const clientId = process.env.GOOGLE_CLIENT_ID;
        const redirectUri = `${process.env.NEXT_PUBLIC_APP_URL}/api/integrations/google-sheets/callback`;
        const scope = encodeURIComponent('https://www.googleapis.com/auth/spreadsheets.readonly');
        const state = Math.random().toString(36).substring(7);

        const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code&scope=${scope}&access_type=offline&state=${state}`;

        return NextResponse.json({ authUrl });
    } catch (error: any) {
        console.error('Google Sheets setup error:', error);
        return NextResponse.json(
            { error: error.message || "Failed to setup Google Sheets integration" },
            { status: 500 }
        );
    }
} 