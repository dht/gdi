import * as fs from 'fs-extra';
import * as path from 'path';

export const readJson = (filepath: string) => {
    const output = {
        success: true,
        content: {} as Json,
        error: '',
    };

    const initialDataPath = path.resolve(__dirname, filepath);
    const pathInfo = path.parse(initialDataPath);

    const initialDataExists = fs.existsSync(initialDataPath);

    if (!initialDataExists) {
        output.success = false;
        output.error = `could not find ${pathInfo.base} file in CLI`;
        return output;
    }

    const contentRaw = fs.readFileSync(initialDataPath).toString();

    try {
        output.content = JSON.parse(contentRaw);
    } catch (_err) {
        output.success = false;
        output.error = `${pathInfo.base} is not a valid JSON`;
        return output;
    }

    return output;
};
