export async function uploadCSV(file: File, batchName: string, batchType: string) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('batchName', batchName);
    formData.append('batchType', batchType);

    const response = await fetch('/api/csv/upload', {
        method: 'POST',
        body: formData
    });

    if (!response.ok) {
        throw new Error('Failed to upload file');
    }

    return response.json();
}

export async function processCSV(batchId: string, mappings: Record<string, string>) {
    const response = await fetch(`/api/csv/process/${batchId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ mappings })
    });

    if (!response.ok) {
        throw new Error('Failed to process CSV');
    }

    return response.json();
}

export async function importCSV(batchId: string, mappings: Record<string, string>) {
    const response = await fetch(`/api/csv/import/${batchId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ mappings })
    });

    if (!response.ok) {
        throw new Error('Failed to import CSV');
    }

    return response.json();
}

export async function fetchUploadedFiles() {
    const response = await fetch('/api/csv/files');
    if (!response.ok) {
        throw new Error('Failed to fetch files');
    }
    const data = await response.json();
    return { files: data.files || [] };
} 