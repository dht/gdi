import * as fs from 'fs-extra';
import * as path from 'path';
import { format } from 'prettier';

type Project = {
    id: string;
    path: string;
    types: string;
};

type Projects = Record<string, Project>;

const indexContent: string[] = [];

const run = async () => {
    const projects = fs.readJsonSync('./projects.json') as Projects;

    for (let project of Object.values(projects)) {
        const { id, path: projectPath, types } = project;

        const typesPath = path.resolve('../../..', projectPath, types);

        const content = fs.readFileSync(typesPath).toString();

        fs.writeFileSync(`../src/${id}.ts`, parseContent(content));

        indexContent.push(`export * from './${id}';`);
    }

    indexContent.push(`\nexport enum PlatformLifeCycleEvents {
        PLATFORM_IS_READY = 'PLATFORM_IS_READY',
        AUTHENTICATION_START = 'AUTHENTICATION_START',
        AUTHENTICATION_COMPLETED = 'AUTHENTICATION_COMPLETED',
    }`);

    fs.writeFileSync(`../src/index.ts`, formatCode(indexContent.join('\n')));
};

let index = 0;

const parseContent = (content: string) => {
    const imports = getImports(content).filter(
        (i) => !i.includes('@gdi') && !i.includes('igrid')
    );

    const contentNoImports = content.replace(/import [^;]+;/g, '');

    return formatCode(
        `// AUTO-GENERATED

        ${imports.join('\n')}

        export const A${index++} = {};

        declare global {` +
            contentNoImports +
            '};'
    );
};

const getImports = (code: string) => {
    const regex = /import [^;]+;/g;
    let match,
        matches: string[] = [];

    while ((match = regex.exec(code))) {
        matches.push(match[0]);
    }

    return matches;
};

const formatCode = (code: string) => {
    return format(code, {
        parser: 'babel-ts',
        trailingComma: 'es5',
        tabWidth: 4,
        semi: true,
        singleQuote: true,
    });
};

run();
