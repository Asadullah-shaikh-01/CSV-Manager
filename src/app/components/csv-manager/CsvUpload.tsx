"use client";

import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { csvService } from "@/services/csv";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { FileType } from "@/app/types/csvTypes";

type Props = {
  onUploadSuccess: () => void;
  setError: (err: string | null) => void;
  setLoading: (val: boolean) => void;
};

export default function CsvUpload({ onUploadSuccess, setError, setLoading }: Props) {
  const [fileType, setFileType] = useState<FileType>('other');

  const onDrop = async (acceptedFiles: File[]) => {
    if (acceptedFiles.length === 0) return;
    const file = acceptedFiles[0];

    setLoading(true);
    setError(null);

    try {
      await csvService.uploadFile(file, fileType);
      onUploadSuccess();
    } catch (err: any) {
      console.error("Upload error:", err);
      setError(err.message || "Upload error");
    } finally {
      setLoading(false);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    accept: {
      "text/csv": [".csv"],
      "application/vnd.ms-excel": [".csv"], // Some CSVs use this MIME type
    },
  });

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <Select value={fileType} onValueChange={(value) => setFileType(value as FileType)}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select file type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="company">Company Data</SelectItem>
            <SelectItem value="people">People Data</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-md p-6 text-center cursor-pointer transition-colors ${isDragActive ? "border-blue-500 bg-blue-50" : "border-gray-300 hover:border-gray-400"
          }`}
      >
        <input {...getInputProps()} />
        <div className="space-y-2">
          <p className="text-gray-600">
            {isDragActive ? "Drop your CSV file here..." : "Drag & drop a CSV file, or click to select"}
          </p>
          <p className="text-sm text-gray-500">Only CSV files are accepted</p>
          <p className="text-sm font-medium">Selected Type: {fileType.charAt(0).toUpperCase() + fileType.slice(1)}</p>
        </div>
      </div>
    </div>
  );
}
