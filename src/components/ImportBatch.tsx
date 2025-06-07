'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { uploadCSV, processCSV, importCSV } from '@/lib/api';
import { Integrations } from './Integrations';

interface ImportBatchProps {
    onClose: () => void;
}

type ImportStep = 'method' | 'upload' | 'map' | 'review' | 'complete';

export function ImportBatch({ onClose }: ImportBatchProps) {
    const [currentStep, setCurrentStep] = useState<ImportStep>('method');
    const [showIntegrations, setShowIntegrations] = useState(false);
    const [batchName, setBatchName] = useState('');
    const [batchType, setBatchType] = useState<'Company' | 'People'>('Company');
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [mappings, setMappings] = useState<Record<string, string>>({});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [batchId, setBatchId] = useState<string | null>(null);
    const [previewData, setPreviewData] = useState<any[]>([]);
    const [csvHeaders, setCsvHeaders] = useState<string[]>([]);
    const [totalRecords, setTotalRecords] = useState<number>(0);

    const systemFields = [
        { name: 'Company Name', required: true },
        { name: 'Industry', required: false },
        { name: 'Website', required: false },
        { name: 'Employee Count', required: false },
        { name: 'Annual Revenue', required: false },
        { name: 'Country', required: false },
        { name: 'State/Province', required: false },
        { name: 'City', required: false }
    ];

    const renderMethodSelection = () => (
        <>
            <h2 className="text-xl font-semibold mb-6">Select Import Method</h2>
            <div className="grid grid-cols-2 gap-4">
                <div
                    className="p-6 border rounded-lg cursor-pointer hover:border-blue-500 flex flex-col items-center"
                    onClick={() => setCurrentStep('upload')}
                >
                    <svg className="w-12 h-12 text-gray-600 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1="16" y1="13" x2="8" y2="13" />
                        <line x1="16" y1="17" x2="8" y2="17" />
                        <line x1="10" y1="9" x2="8" y2="9" />
                    </svg>
                    <h3 className="font-medium mb-2">CSV File</h3>
                    <p className="text-sm text-gray-500 text-center">Upload data from a CSV spreadsheet</p>
                </div>
                <div
                    className="p-6 border rounded-lg cursor-pointer hover:border-blue-500 flex flex-col items-center"
                    onClick={() => setShowIntegrations(true)}
                >
                    <svg className="w-12 h-12 text-gray-600 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="2" y1="12" x2="22" y2="12" />
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                    <h3 className="font-medium mb-2">Integrations</h3>
                    <p className="text-sm text-gray-500 text-center">Import from connected data sources</p>
                </div>
            </div>
        </>
    );

    const renderProgressSteps = () => {
        const steps = [
            { number: 1, label: 'Upload File', status: currentStep === 'upload' ? 'current' : currentStep === 'map' || currentStep === 'review' || currentStep === 'complete' ? 'complete' : 'pending' },
            { number: 2, label: 'Map Fields', status: currentStep === 'map' ? 'current' : currentStep === 'review' || currentStep === 'complete' ? 'complete' : 'pending' },
            { number: 3, label: 'Review', status: currentStep === 'review' ? 'current' : currentStep === 'complete' ? 'complete' : 'pending' },
            { number: 4, label: 'Complete', status: currentStep === 'complete' ? 'current' : 'pending' }
        ];

        return (
            <div className="flex justify-between mb-8">
                {steps.map((step, index) => (
                    <div key={step.number} className="flex items-center">
                        <div className={`flex flex-col items-center ${index !== 0 ? 'ml-4' : ''}`}>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step.status === 'complete' ? 'bg-green-500 text-white' :
                                step.status === 'current' ? 'bg-blue-500 text-white' :
                                    'bg-gray-200 text-gray-500'
                                }`}>
                                {step.status === 'complete' ? '✓' : step.number}
                            </div>
                            <span className="text-xs mt-1">{step.label}</span>
                        </div>
                        {index < steps.length - 1 && (
                            <div className={`h-[2px] w-24 mt-4 ${step.status === 'complete' ? 'bg-green-500' : 'bg-gray-200'
                                }`} />
                        )}
                    </div>
                ))}
            </div>
        );
    };

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        // Check file type
        if (!file.name.toLowerCase().endsWith('.csv')) {
            setError('Only CSV files are allowed');
            return;
        }

        // Check file size (10MB limit)
        const maxSize = 10 * 1024 * 1024; // 10MB
        if (file.size > maxSize) {
            setError('File size exceeds 10MB limit');
            return;
        }

        setSelectedFile(file);
        setError(null);
    };

    const handleFileUpload = async () => {
        if (!selectedFile || !batchName) return;

        setIsLoading(true);
        setError(null);

        try {
            const result = await uploadCSV(selectedFile, batchName, batchType);
            setBatchId(result.id);
            setCsvHeaders(result.headers || []);
            setCurrentStep('map');
        } catch (err) {
            setError('Failed to upload file. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleFieldMapping = async () => {
        if (!batchId || !mappings['Company Name']) return;

        setIsLoading(true);
        setError(null);

        try {
            const result = await processCSV(batchId, mappings);
            setPreviewData(result.preview);
            setTotalRecords(result.recordCount);
            setCurrentStep('review');
        } catch (err) {
            setError('Failed to process CSV. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleImport = async () => {
        if (!batchId) return;

        setIsLoading(true);
        setError(null);

        try {
            await importCSV(batchId, mappings);
            setCurrentStep('complete');
        } catch (err) {
            setError('Failed to import data. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const renderUploadStep = () => (
        <div className="space-y-6">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Batch Name</label>
                <Input
                    value={batchName}
                    onChange={(e) => setBatchName(e.target.value)}
                    placeholder="Enter batch name"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Batch Type</label>
                <div className="flex gap-4">
                    <label className="flex items-center">
                        <input
                            type="radio"
                            checked={batchType === 'Company'}
                            onChange={() => setBatchType('Company')}
                            className="mr-2"
                        />
                        Company
                    </label>
                    <label className="flex items-center">
                        <input
                            type="radio"
                            checked={batchType === 'People'}
                            onChange={() => setBatchType('People')}
                            className="mr-2"
                        />
                        People
                    </label>
                </div>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Upload CSV File</label>
                <div
                    className="border-2 border-dashed border-gray-300 rounded-lg p-8"
                    onDragOver={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                    }}
                    onDrop={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        const file = e.dataTransfer.files?.[0];
                        if (file) {
                            if (!file.name.toLowerCase().endsWith('.csv')) {
                                setError('Only CSV files are allowed');
                                return;
                            }
                            if (file.size > 10 * 1024 * 1024) {
                                setError('File size exceeds 10MB limit');
                                return;
                            }
                            setSelectedFile(file);
                            setError(null);
                        }
                    }}
                >
                    <div className="flex flex-col items-center">
                        <svg className="w-12 h-12 text-gray-400 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                        </svg>
                        <div className="text-sm text-gray-600">
                            <label className="cursor-pointer text-blue-600 hover:text-blue-500">
                                <span>Choose file</span>
                                <input
                                    type="file"
                                    className="hidden"
                                    accept=".csv"
                                    onChange={handleFileSelect}
                                />
                            </label>
                            <span className="ml-1">or drag and drop</span>
                        </div>
                        <p className="text-xs text-gray-500 mt-2">CSV files up to 10MB</p>
                        {selectedFile && (
                            <div className="mt-4 text-sm text-gray-600">
                                Selected file: {selectedFile.name}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="flex justify-between pt-4">
                <Button variant="outline" onClick={() => setCurrentStep('method')}>
                    Back
                </Button>
                <Button
                    onClick={handleFileUpload}
                    disabled={!selectedFile || !batchName || isLoading}
                >
                    {isLoading ? 'Uploading...' : 'Continue'}
                </Button>
            </div>
            {error && (
                <p className="text-sm text-red-500 mt-2">{error}</p>
            )}
        </div>
    );

    const renderMapStep = () => (
        <div className="space-y-6">
            <p className="text-sm text-gray-600">Map your CSV columns to our system fields. Required fields are marked with an asterisk (*).</p>
            <div className="space-y-4">
                {systemFields.map((field) => (
                    <div key={field.name} className="flex items-center gap-4">
                        <label className="w-1/3 text-sm font-medium">
                            {field.name} {field.required && <span className="text-red-500">*</span>}
                        </label>
                        <select
                            className="w-2/3 rounded-md border border-gray-300 p-2 text-sm"
                            value={mappings[field.name] || ''}
                            onChange={(e) => setMappings({ ...mappings, [field.name]: e.target.value })}
                        >
                            <option value="">-- Not Mapped --</option>
                            {csvHeaders.map((column) => (
                                <option key={column} value={column}>
                                    {column}
                                </option>
                            ))}
                        </select>
                    </div>
                ))}
            </div>
            <div className="flex justify-between pt-4">
                <Button variant="outline" onClick={() => setCurrentStep('upload')}>
                    Back
                </Button>
                <Button
                    onClick={handleFieldMapping}
                    disabled={!mappings['Company Name'] || isLoading}
                >
                    {isLoading ? 'Processing...' : 'Continue'}
                </Button>
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
    );

    const renderReviewStep = () => (
        <div className="space-y-6">
            <div>
                <h3 className="font-medium mb-4">Batch Information</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                        <span className="text-gray-500">Batch Name</span>
                        <p>{batchName}</p>
                    </div>
                    <div>
                        <span className="text-gray-500">Batch Type</span>
                        <p>{batchType}</p>
                    </div>
                    <div>
                        <span className="text-gray-500">File</span>
                        <p>{selectedFile?.name}</p>
                    </div>
                    <div>
                        <span className="text-gray-500">Records</span>
                        <p>{totalRecords.toLocaleString()} total ({previewData.length} in preview)</p>
                    </div>
                </div>
            </div>
            <div>
                <h3 className="font-medium mb-4">Field Mappings</h3>
                <div className="space-y-2 text-sm">
                    {Object.entries(mappings).map(([field, column]) => (
                        <div key={field} className="grid grid-cols-2 gap-4">
                            <span className="text-gray-500">{field}</span>
                            <span>{column}</span>
                        </div>
                    ))}
                </div>
            </div>
            {previewData.length > 0 && (
                <div>
                    <h3 className="font-medium mb-4">Data Preview</h3>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    {Object.keys(previewData[0]).map((header) => (
                                        <th
                                            key={header}
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            {header}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {previewData.map((row, index) => (
                                    <tr key={index}>
                                        {Object.values(row).map((value: any, i) => (
                                            <td
                                                key={i}
                                                className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                                            >
                                                {value}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
            <div className="flex justify-between pt-4">
                <Button variant="outline" onClick={() => setCurrentStep('map')}>
                    Back
                </Button>
                <Button
                    onClick={handleImport}
                    disabled={isLoading}
                >
                    {isLoading ? 'Importing...' : 'Import Batch'}
                </Button>
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
    );

    const renderCompleteStep = () => (
        <div className="text-center space-y-6">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
            </div>
            <h3 className="text-lg font-medium">Batch Import Successful</h3>
            <p className="text-sm text-gray-600">
                Your batch "{batchName}" has been successfully imported and is now available in your batches list.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm max-w-xs mx-auto">
                <div className="text-right text-gray-500">Batch Name:</div>
                <div className="text-left">{batchName}</div>
                <div className="text-right text-gray-500">Type:</div>
                <div className="text-left">{batchType}</div>
                <div className="text-right text-gray-500">Records:</div>
                <div className="text-left">{totalRecords.toLocaleString()}</div>
            </div>
            <div className="flex justify-center gap-4 pt-4">
                <Button variant="outline" onClick={onClose}>
                    Back to Lists & Batches
                </Button>
                <Button onClick={() => setCurrentStep('method')}>
                    Import Another Batch
                </Button>
            </div>
        </div>
    );

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4">
                <div className="flex justify-between items-center p-6 border-b">
                    <h1 className="text-xl font-semibold">Import Batch</h1>
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
                    {currentStep !== 'method' && renderProgressSteps()}
                    {currentStep === 'method' && renderMethodSelection()}
                    {currentStep === 'upload' && renderUploadStep()}
                    {currentStep === 'map' && renderMapStep()}
                    {currentStep === 'review' && renderReviewStep()}
                    {currentStep === 'complete' && renderCompleteStep()}
                </div>
            </div>
            {showIntegrations && (
                <Integrations onClose={() => setShowIntegrations(false)} />
            )}
        </div>
    );
} 