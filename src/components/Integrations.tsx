import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface Integration {
    id: string;
    name: string;
    icon: string;
    description: string;
    status: 'available' | 'coming_soon';
    setupUrl: string | null;
}

interface IntegrationsProps {
    onClose: () => void;
}

export function Integrations({ onClose }: IntegrationsProps) {
    const [integrations, setIntegrations] = useState<Integration[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchIntegrations();
    }, []);

    const fetchIntegrations = async () => {
        try {
            const response = await fetch('/api/integrations');
            if (!response.ok) {
                throw new Error('Failed to fetch integrations');
            }
            const data = await response.json();
            setIntegrations(data.integrations);
        } catch (err) {
            setError('Failed to load integrations');
            console.error('Error loading integrations:', err);
        } finally {
            setIsLoading(false);
        }
    };

    const handleConnect = async (integration: Integration) => {
        if (integration.status === 'coming_soon' || !integration.setupUrl) {
            return;
        }

        try {
            const response = await fetch(integration.setupUrl);
            if (!response.ok) {
                throw new Error('Failed to setup integration');
            }
            const data = await response.json();

            // Open authentication window if provided
            if (data.authUrl) {
                window.open(data.authUrl, '_blank', 'width=600,height=800');
            }
        } catch (err) {
            setError(`Failed to connect to ${integration.name}`);
            console.error('Error connecting to integration:', err);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4">
                <div className="flex justify-between items-center p-6 border-b">
                    <h1 className="text-xl font-semibold">Connect Data Source</h1>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="p-6">
                    {error && (
                        <div className="bg-red-50 text-red-500 p-4 rounded-md mb-4">
                            {error}
                        </div>
                    )}

                    {isLoading ? (
                        <div className="text-center py-8">Loading available integrations...</div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {integrations.map((integration) => (
                                <div
                                    key={integration.id}
                                    className="border rounded-lg p-4 hover:border-blue-500 transition-colors"
                                >
                                    <div className="flex items-center mb-4">
                                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                                            <img
                                                src={integration.icon}
                                                alt={integration.name}
                                                className="w-8 h-8"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="font-medium">{integration.name}</h3>
                                            <p className="text-sm text-gray-500">
                                                {integration.description}
                                            </p>
                                        </div>
                                    </div>
                                    <Button
                                        onClick={() => handleConnect(integration)}
                                        disabled={integration.status === 'coming_soon'}
                                        className="w-full"
                                        variant={integration.status === 'coming_soon' ? 'outline' : 'default'}
                                    >
                                        {integration.status === 'coming_soon' ? 'Coming Soon' : 'Connect'}
                                    </Button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
} 