export const readFile = (
    file: File,
    isJson?: boolean
): Promise<string | Json> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = (e) => {
            const value = e.target?.result;

            if (!value) {
                reject(new Error('Failed to read file'));
                return;
            }

            if (!isJson) {
                resolve(value as string);
            }

            try {
                const json = JSON.parse(value as string);
                resolve(json);
            } catch (error) {
                reject(new Error('Failed to parse JSON'));
                return;
            }
        };

        reader.readAsText(file);
    });
};
