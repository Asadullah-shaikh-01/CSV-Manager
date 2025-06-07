import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    try {
        // Check if Microsoft credentials exist
        if (!process.env.MICROSOFT_CLIENT_ID || !process.env.MICROSOFT_CLIENT_SECRET) {
            return NextResponse.json(
                { error: "Microsoft Excel credentials not configured" },
                { status: 500 }
            );
        }

        // Generate OAuth URL for Microsoft Excel Online
        const clientId = process.env.MICROSOFT_CLIENT_ID;
        const redirectUri = `${process.env.NEXT_PUBLIC_APP_URL}/api/integrations/excel-online/callback`;
        const scope = encodeURIComponent('Files.Read.All offline_access');
        const state = Math.random().toString(36).substring(7);

        const authUrl = `https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code&scope=${scope}&state=${state}`;

        return NextResponse.json({ authUrl });
    } catch (error: any) {
        console.error('Excel Online setup error:', error);
        return NextResponse.json(
            { error: error.message || "Failed to setup Excel Online integration" },
            { status: 500 }
        );
    }
} 