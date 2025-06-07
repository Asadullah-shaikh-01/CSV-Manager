interface Config {
    database: {
        url: string;
    };
    app: {
        url: string;
    };
    integrations: {
        google: {
            clientId: string;
            clientSecret: string;
        };
        airtable: {
            clientId: string;
            clientSecret: string;
            apiKey: string;
        };
        microsoft: {
            clientId: string;
            clientSecret: string;
        };
    };
}

function validateConfig(): Config {
    const requiredEnvVars = {
        'DATABASE_URL': process.env.DATABASE_URL,
        'NEXT_PUBLIC_APP_URL': process.env.NEXT_PUBLIC_APP_URL,
        'GOOGLE_CLIENT_ID': process.env.GOOGLE_CLIENT_ID,
        'GOOGLE_CLIENT_SECRET': process.env.GOOGLE_CLIENT_SECRET,
        'AIRTABLE_CLIENT_ID': process.env.AIRTABLE_CLIENT_ID,
        'AIRTABLE_CLIENT_SECRET': process.env.AIRTABLE_CLIENT_SECRET,
        'AIRTABLE_API_KEY': process.env.AIRTABLE_API_KEY,
        'MICROSOFT_CLIENT_ID': process.env.MICROSOFT_CLIENT_ID,
        'MICROSOFT_CLIENT_SECRET': process.env.MICROSOFT_CLIENT_SECRET,
    };

    const missingVars = Object.entries(requiredEnvVars)
        .filter(([_, value]) => !value)
        .map(([key]) => key);

    if (missingVars.length > 0) {
        throw new Error(`Missing required environment variables: ${missingVars.join(', ')}`);
    }

    return {
        database: {
            url: process.env.DATABASE_URL!,
        },
        app: {
            url: process.env.NEXT_PUBLIC_APP_URL!,
        },
        integrations: {
            google: {
                clientId: process.env.GOOGLE_CLIENT_ID!,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            },
            airtable: {
                clientId: process.env.AIRTABLE_CLIENT_ID!,
                clientSecret: process.env.AIRTABLE_CLIENT_SECRET!,
                apiKey: process.env.AIRTABLE_API_KEY!,
            },
            microsoft: {
                clientId: process.env.MICROSOFT_CLIENT_ID!,
                clientSecret: process.env.MICROSOFT_CLIENT_SECRET!,
            },
        },
    };
}

export const config = validateConfig(); 