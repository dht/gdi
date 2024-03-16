export function downloadText(
    filename: string,
    text: string,
    type: string = 'application/text'
) {
    let blob = new Blob([text], { type });
    let url = window.URL.createObjectURL(blob);
    downloadURI(url, filename);
    window.URL.revokeObjectURL(url);
}

export function downloadJson(filename: string, data: Json) {
    const text = JSON.stringify(data, null, 4);
    return downloadText(filename, text, 'application/json');
}

export const sanitizeValueForCsv = (value: string) => {
    let output = value;

    if (output.includes(',')) {
        output = `"${output}"`;
    }

    return output;
};

export function downloadCsv(
    filename: string,
    fieldMap: Record<string, string>,
    data: Json
) {
    const header = Object.values(fieldMap).join(',');
    const rows = data.map((row: Json) => {
        return Object.keys(fieldMap)
            .map((field) => {
                return sanitizeValueForCsv(row[field]);
            })
            .join(',');
    });

    const text = [header, ...rows].join('\n');

    return downloadText(filename, text, 'application/csv');
}

export function downloadHtml(filename: string, html: string) {
    return downloadText(filename, html, 'application/html');
}

function downloadURI(uri: string, filename: string) {
    let link = document.createElement('a');
    link.download = filename;
    link.href = uri;
    link.click();
}
