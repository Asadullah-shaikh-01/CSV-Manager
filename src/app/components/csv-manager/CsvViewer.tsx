"use client";

import React, { useState, useEffect } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import type { CsvFile } from "@/app/types/csvTypes";

type Props = {
    file: CsvFile | null;
    onClose: () => void;
};

export default function CsvViewer({ file, onClose }: Props) {
    const [rows, setRows] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredRows, setFilteredRows] = useState<any[]>([]);

    useEffect(() => {
        if (file) {
            fetchFileContents();
        }
    }, [file]);

    useEffect(() => {
        if (searchTerm) {
            const filtered = rows.filter((row) =>
                Object.values(row).some((value) =>
                    String(value).toLowerCase().includes(searchTerm.toLowerCase())
                )
            );
            setFilteredRows(filtered);
        } else {
            setFilteredRows(rows);
        }
    }, [searchTerm, rows]);

    const fetchFileContents = async () => {
        if (!file) return;

        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`/api/csv/file/${file.id}/contents`);
            if (!response.ok) {
                throw new Error("Failed to fetch file contents");
            }
            const data = await response.json();
            setRows(data.rows);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    if (!file) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col">
                <div className="p-4 border-b flex items-center justify-between">
                    <h2 className="text-xl font-semibold">{file.fileName}</h2>
                    <Button variant="ghost" onClick={onClose}>×</Button>
                </div>

                <div className="p-4 border-b">
                    <Input
                        type="text"
                        placeholder="Search in file contents..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="max-w-md"
                    />
                </div>

                <div className="flex-1 overflow-auto p-4">
                    {loading ? (
                        <p>Loading file contents...</p>
                    ) : error ? (
                        <p className="text-red-500">{error}</p>
                    ) : (
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    {file.columnHeaders.map((header) => (
                                        <TableHead key={header}>{header}</TableHead>
                                    ))}
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {filteredRows.map((row, index) => (
                                    <TableRow key={index}>
                                        {file.columnHeaders.map((header) => (
                                            <TableCell key={header}>
                                                {row[header]}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    )}
                </div>
            </div>
        </div>
    );
} 