'use client';

import React, { useState, useEffect } from 'react';
import { ImportBatch } from '@/components/ImportBatch';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { fetchUploadedFiles } from '@/lib/api';

interface UploadedFile {
    id: string;
    fileName: string;
    uploadDate: string;
    size: number;
}

export default function CSVManager() {
    const [showImport, setShowImport] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [files, setFiles] = useState<UploadedFile[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const loadFiles = async () => {
        try {
            setIsLoading(true);
            setError(null);
            const response = await fetchUploadedFiles();
            setFiles(response.files || []);
        } catch (err) {
            setError('Failed to load files');
            console.error('Error loading files:', err);
            setFiles([]);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        loadFiles();
    }, []);

    const handleRefresh = () => {
        loadFiles();
    };

    const formatDate = (dateString: string) => {
        try {
            const date = new Date(dateString);
            if (isNaN(date.getTime())) {
                return 'Invalid Date';
            }
            return date.toLocaleString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
        } catch (error) {
            console.error('Error formatting date:', error);
            return 'Invalid Date';
        }
    };

    const formatFileSize = (bytes: number | undefined): string => {
        if (typeof bytes !== 'number' || isNaN(bytes) || bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
    };

    const filteredFiles = files?.filter(file =>
        file.fileName.toLowerCase().includes(searchQuery.toLowerCase())
    ) || [];

    return (
        <div className="container mx-auto py-8">
            <div className="flex justify-between items-center mb-6">
                <div className="flex-1">
                    <h1 className="text-2xl font-bold">CSV Manager</h1>
                    <p className="text-sm text-gray-500">
                        {files.length} file{files.length !== 1 ? 's' : ''} uploaded
                    </p>
                </div>
                <div className="flex gap-4 items-center">
                    <Input
                        type="search"
                        placeholder="Search files..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-64"
                    />
                    <Button variant="outline" size="icon" onClick={handleRefresh}>
                        <RefreshIcon className="h-4 w-4" />
                    </Button>
                    <Button onClick={() => setShowImport(true)}>Import</Button>
                </div>
            </div>

            {error && (
                <div className="bg-red-50 text-red-500 p-4 rounded-md mb-4">
                    {error}
                </div>
            )}

            {isLoading ? (
                <div className="text-center py-8">Loading...</div>
            ) : (
                <div className="bg-white shadow rounded-lg overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    File Name
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Upload Date
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Size
                                </th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {filteredFiles.map((file) => (
                                <tr key={file.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm font-medium text-gray-900">
                                            {file.fileName}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-500">
                                            {formatDate(file.uploadDate)}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-500">
                                            {formatFileSize(file.size)}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <Button variant="link" className="text-indigo-600 hover:text-indigo-900">
                                            View
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                            {filteredFiles.length === 0 && (
                                <tr>
                                    <td colSpan={4} className="px-6 py-4 text-center text-sm text-gray-500">
                                        {searchQuery ? 'No files match your search' : 'No files uploaded yet'}
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            )}

            {showImport && (
                <ImportBatch
                    onClose={() => {
                        setShowImport(false);
                        loadFiles(); // Refresh the file list after import
                    }}
                />
            )}
        </div>
    );
}

function RefreshIcon(props: React.ComponentProps<'svg'>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
            <path d="M21 3v5h-5" />
            <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
            <path d="M3 21v-5h5" />
        </svg>
    );
} 