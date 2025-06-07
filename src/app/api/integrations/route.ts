import { NextResponse } from 'next/server';

// Define available integration sources
const integrationSources = [
    {
        id: 'google-sheets',
        name: 'Google Sheets',
        icon: '/icons/google-sheets.svg',
        description: 'Import data directly from Google Sheets',
        status: 'available',
        setupUrl: '/api/integrations/google-sheets/setup'
    },
    {
        id: 'excel-online',
        name: 'Excel Online',
        icon: '/icons/excel-online.svg',
        description: 'Connect to Microsoft Excel Online',
        status: 'available',
        setupUrl: '/api/integrations/excel-online/setup'
    },
    {
        id: 'airtable',
        name: 'Airtable',
        icon: '/icons/airtable.svg',
        description: 'Import from Airtable bases',
        status: 'available',
        setupUrl: '/api/integrations/airtable/setup'
    },
    {
        id: 'salesforce',
        name: 'Salesforce',
        icon: '/icons/salesforce.svg',
        description: 'Connect to Salesforce objects',
        status: 'coming_soon',
        setupUrl: null
    }
];

export async function GET() {
    return NextResponse.json({ integrations: integrationSources });
} 