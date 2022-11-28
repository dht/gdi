// shortcuts: apps
// desc: regenerate apps package
import { parseArgv } from '../../utils/argv';
import * as path from 'path';
import * as fs from 'fs-extra';
import * as globby from 'globby';
import chalk from 'chalk';
import { upperFirst } from 'shared-base';

const argv = parseArgv(process.argv);
const { cwd } = argv;

let adminPath = path.resolve(cwd, 'clients/gdi-admin');

if (!fs.existsSync(adminPath)) {
    adminPath = path.resolve(cwd, 'gdi-admin');
    if (!fs.existsSync(adminPath)) {
        console.log(chalk.red('could not find "gdi-admin" folder'));
        process.exit();
    }
}

if (!fs.existsSync(`${adminPath}/src/extra`)) {
    fs.mkdirSync(`${adminPath}/src/extra`);
}

const outputFilePaths = {
    tsConfigExtra: path.resolve(adminPath, 'config/tsconfig.paths.extra.json'),
    viteExtra: path.resolve(adminPath, 'config/vite.extra.ts'),
    appsExtra: path.resolve(adminPath, 'src/extra/main.extra.ts'),
};

type Lines = {
    imports: string[];
    initializers: string[];
};

const run = async () => {
    const apps = scanForApps();
    const stores = scanForStores();

    let extraText = '';

    if (apps.all.length > 0) {
        console.log(`${chalk.yellow(apps.all.length)} extra apps available:`);
        extraText = 'with those apps';
    }

    apps.all.forEach((appName) => {
        console.log(`- ${chalk.magenta(appName)}`);
    });

    process.stdout.write(
        `generating ${chalk.cyan('main.apps.ts')} package${extraText}...`
    );

    const linesMain = appsToMainLines(apps.extra);
    fs.writeFileSync(
        outputFilePaths.appsExtra,
        templateInitializers(linesMain)
    );

    const linesVite = appsAndStoresToLinesVite(apps.extra, stores.extra);
    fs.writeFileSync(outputFilePaths.viteExtra, templateVite(linesVite));

    const linesTsConfig = appsAndStoresToLinesTsConfig(
        apps.extra,
        stores.extra
    );
    fs.writeJsonSync(
        outputFilePaths.tsConfigExtra,
        {
            compilerOptions: {
                paths: linesTsConfig,
            },
        },
        { spaces: 4 }
    );

    console.log(chalk.green('done'));
};

const appsToMainLines = (apps: string[]) => {
    return apps.reduce(
        (output: Lines, fullAppName) => {
            const appName = fullAppName.split('-').pop();
            const initVariableName = `init${upperFirst(appName!)}`;

            output.imports.push(
                `import { initApp as ${initVariableName} } from '@gdi/app-${appName}';`
            );

            output.initializers.push(`${appName}: ${initVariableName}`);

            return output;
        },
        {
            imports: [],
            initializers: [],
        }
    );
};

const appsAndStoresToLinesVite = (apps: string[], stores: string[]) => {
    const output = {} as Json;

    apps.forEach((fullAppName) => {
        const key = `@gdi/${fullAppName}`;
        output[key] = `\`\${cwd}/extra/apps/${fullAppName}/src\``;
    });

    stores.forEach((fullStoreName) => {
        const key = `@gdi/${fullStoreName}`.replace(/gdi-/, '');
        output[key] = `\`\${cwd}/extra/stores/${fullStoreName}/src\``;
    });

    return output;
};

const appsAndStoresToLinesTsConfig = (apps: string[], stores: string[]) => {
    const output = {} as Json;

    apps.forEach((fullAppName) => {
        const key = `@gdi/${fullAppName}`;
        output[key] = [`extra/apps/${fullAppName}`];
    });

    stores.forEach((fullStoreName) => {
        const key = `@gdi/${fullStoreName}`.replace(/gdi-/, '');
        output[key] = [`extra/stores/${fullStoreName}`];
    });

    return output;
};

const scanForApps = () => {
    const output = {
        base: [] as string[],
        extra: [] as string[],
        all: [] as string[],
    };

    output.base = globby.sync('*', {
        cwd: `${cwd}/apps`,
        onlyDirectories: true,
    });

    output.extra = globby.sync('*', {
        cwd: `${cwd}/extra/apps`,
        onlyDirectories: true,
    });

    output.all = [...output.base, ...output.extra];

    return output;
};

const scanForStores = () => {
    const output = {
        base: [] as string[],
        extra: [] as string[],
        all: [] as string[],
    };

    output.base = globby.sync('*', {
        cwd: `${cwd}/stores`,
        onlyDirectories: true,
    });

    output.extra = globby.sync('*', {
        cwd: `${cwd}/extra/stores`,
        onlyDirectories: true,
    });

    output.all = [...output.base, ...output.extra];

    return output;
};

const templateInitializers = (lines: Lines) => {
    const { imports, initializers } = lines;

    return (
        imports.join('\n') +
        `

export const initializersExtra = {
    ${initializers.join(',\n\t')}
};
`
    );
};

const templateVite = (map: Json) => {
    return `import * as path from 'path';

const cwd = path.resolve(process.cwd(), '../../');

export const aliasExtra = {
    ${Object.keys(map)
        .map((key) => `'${key}': ${map[key]}`)
        .join(',\n\t')}
   
};
`;
};

run();
