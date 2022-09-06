// shortcuts: apps
// desc: regenerate apps package
import { parseArgv } from '../../utils/argv';
import * as path from 'path';
import * as fs from 'fs-extra';
import * as globby from 'globby';
import chalk from 'chalk';
import { upperFirst } from 'lodash';

const argv = parseArgv(process.argv);
const { cwd } = argv;
const packagePath = path.resolve(cwd, 'node_modules/@gdi/apps');

type Lines = {
    imports: string[];
    initializers: string[];
};

const run = async () => {
    const apps = scanForApps();

    console.log(`${chalk.yellow(apps.length)} apps available:`);

    apps.forEach((appName) => {
        console.log(`- ${chalk.magenta(appName)}`);
    });

    process.stdout.write(
        `generating ${chalk.cyan(
            'node_modules/@gdi/apps'
        )} package with those apps...`
    );

    generatePackageDirectory();

    const lines = appsToLines(apps);
    fs.writeFileSync(`${packagePath}/index.js`, template(lines));

    console.log(chalk.green('done'));
};

const appsToLines = (apps: string[]) => {
    return apps.reduce(
        (output: Lines, fullAppName) => {
            const appName = fullAppName.split('-').pop();
            const initVariableName = `init${upperFirst(appName)}`;

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

const generatePackageDirectory = () => {
    if (!fs.existsSync(packagePath)) {
        fs.mkdirSync(packagePath);
    }

    fs.writeJsonSync(
        `${packagePath}/package.json`,
        {
            name: '@gdi/apps',
            private: true,
            version: '1.0.0',
            main: './index.js',
        },
        { spaces: 4 }
    );
};

const scanForApps = () => {
    const output = [];
    let apps: string[] = [];

    apps = globby.sync('*', {
        cwd: `${cwd}/apps`,
        onlyDirectories: true,
    });
    output.push(...apps);

    apps = globby.sync('*', {
        cwd: `${cwd}/submodules/gdi-extra/apps`,
        onlyDirectories: true,
    });

    output.push(...apps);
    return output;
};

const template = (lines: Lines) => {
    const { imports, initializers } = lines;

    return (
        imports.join('\n') +
        `

export const initializers = {
    ${initializers.join(',\n\t')}
};
`
    );
};

run();
