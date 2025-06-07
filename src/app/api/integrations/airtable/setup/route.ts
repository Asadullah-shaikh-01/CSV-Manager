import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    try {
        // Check if AIRTABLE_API_KEY exists in environment variables
        if (!process.env.AIRTABLE_API_KEY) {
            return NextResponse.json(
                { error: "Airtable API key not configured" },
                { status: 500 }
            );
        }

        // Generate OAuth URL for Airtable
        // Note: You'll need to register your application with Airtable to get these values
        const clientId = process.env.AIRTABLE_CLIENT_ID;
        const redirectUri = `${process.env.NEXT_PUBLIC_APP_URL}/api/integrations/airtable/callback`;
        const scope = 'data.records:read';
        const state = Math.random().toString(36).substring(7); // Generate random state

        const authUrl = `https://airtable.com/oauth2/v1/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code&scope=${scope}&state=${state}`;

        return NextResponse.json({ authUrl });
    } catch (error: any) {
        console.error('Airtable setup error:', error);
        return NextResponse.json(
            { error: error.message || "Failed to setup Airtable integration" },
            { status: 500 }
        );
    }
} 