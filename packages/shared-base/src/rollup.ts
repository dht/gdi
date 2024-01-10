import { camelCase } from './godash';

type Dependencies = Record<string, string>;

export const externals = (dependencies: Dependencies) => {
    return {
        external: Object.keys(dependencies),
        output: {
            globals: Object.keys(dependencies).reduce((output, key) => {
                const packageNameNoSpecialCharacters = key.replace(/[@\/]/g, '-'); // prettier-ignore
                const variableName = camelCase(packageNameNoSpecialCharacters); // prettier-ignore
                output[key] = variableName;
                return output;
            }, {} as Json),
        },
    };
};
