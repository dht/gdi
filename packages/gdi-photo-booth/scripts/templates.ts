import { Json } from './types';
import { format } from 'prettier';

export const templateScreenshot = (json: Json) => {
    const code = `import type { IScreenshotsPerFlavour } from '@gdi/web-ui';

    export const screenshots: IScreenshotsPerFlavour = ${JSON.stringify(
        json,
        null,
        4
    )};
    `;

    return formatCode(code);
};

export const templateDimensions = (json: Json) => {
    const code = `import { IDimensionsPerFlavour } from '@gdi/web-ui';

    export const dimensions: IDimensionsPerFlavour = ${JSON.stringify(
        json,
        null,
        4
    )};
    `;

    return formatCode(code);
};

const formatCode = (code: string) => {
    return format(code, {
        parser: 'babel-ts',
        trailingComma: 'es5',
        tabWidth: 4,
        semi: true,
        singleQuote: true,
        jsxSingleQuote: true,
        endOfLine: 'auto',
        useTabs: false,
    });
};
