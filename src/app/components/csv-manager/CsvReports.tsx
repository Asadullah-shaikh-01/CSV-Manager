"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

type ReportType = 'summary' | 'detailed' | 'custom';

interface CsvReportsProps {
    fileId: string;
    fileName: string;
}

export default function CsvReports({ fileId, fileName }: CsvReportsProps) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const generateReport = async (reportType: ReportType) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`/api/csv/reports/${fileId}?type=${reportType}`, {
                method: 'POST',
            });

            if (!response.ok) {
                throw new Error('Failed to generate report');
            }

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${fileName}-${reportType}-report.csv`;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="mt-4 p-4 border rounded-lg bg-white">
            <h3 className="text-lg font-semibold mb-4">Generate Reports</h3>
            <div className="flex gap-4 flex-wrap">
                <Button
                    onClick={() => generateReport('summary')}
                    disabled={loading}
                    variant="outline"
                >
                    Summary Report
                </Button>
                <Button
                    onClick={() => generateReport('detailed')}
                    disabled={loading}
                    variant="outline"
                >
                    Detailed Report
                </Button>
                <Button
                    onClick={() => generateReport('custom')}
                    disabled={loading}
                    variant="outline"
                >
                    Custom Analysis
                </Button>
            </div>
            {loading && <p className="mt-2 text-gray-600">Generating report...</p>}
            {error && <p className="mt-2 text-red-600">{error}</p>}
        </div>
    );
} 