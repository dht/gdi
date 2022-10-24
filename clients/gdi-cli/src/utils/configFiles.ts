import { Json } from '../types';
import * as fs from 'fs-extra';
import _ from 'lodash';

function stripJsonTrailingCommas(content: string): string {
    return content.replace(
        /(?<=(true|false|null|["\d}\]])\s*),(?=\s*[}\]])/g,
        ''
    );
}

export const readTsConfig = (tsconfigPath: string): Json => {
    const text = fs.readFileSync(tsconfigPath).toString();

    // remove trailing commas
    const output = stripJsonTrailingCommas(text);
    return JSON.parse(output);
};

export const addCompilerOptionsPaths = (tsconfigPath: string, change: Json) => {
    if (!fs.existsSync(tsconfigPath)) {
        console.log(`could not find tsconfig in ${tsconfigPath}`);
        return;
    }

    const json = readTsConfig(tsconfigPath);

    json.compilerOptions = json.compilerOptions ?? {};
    json.compilerOptions.paths = json.compilerOptions.paths ?? {};

    json.compilerOptions.paths = {
        ...json.compilerOptions.paths,
        ...change,
    };

    fs.writeJsonSync(tsconfigPath, json, { spaces: 4 });
};

export const addViteAlias = (vitePath: string, key: string, value: string) => {
    if (!fs.existsSync(vitePath)) {
        console.log(`could not find vite config in ${vitePath}`);
        return;
    }

    let data = fs.readFileSync(vitePath).toString();

    if (data.includes(key)) {
        console.log(`key ${key} already exists on vite config`);
        return;
    }

    data = data.replace(
        'alias: {',
        `alias: {
            ${key}: ${value},`
    );

    fs.writeFileSync(vitePath, data);
};
