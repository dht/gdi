import { format } from 'prettier';

export const formatCode = (code: string) => {
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
