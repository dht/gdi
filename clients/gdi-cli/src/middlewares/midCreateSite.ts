import fs from 'fs-extra';
import chalk from 'chalk';
import cases from '../utils/cases';
import { autoComplete } from '../utils/input';
import { CreateMiddlewares } from '../types';
import { Command } from '../utils/command';
import { run } from '../cli/cli';

const MONO_REPO_LAYOUT_CONFIGURATION_FILENAME = '.layout.json';
const NON_SITE_TEMPLATES: string[] = ['react-gdi-template'];

const preRun = () => async (command: Command, next: any) => {
    const { local } = command;
    const { params } = local;
    const { cwd, entityName, templatesPath } = params;

    console.log(chalk.cyan(`creating a new site: "${entityName}"`));

    const templates = fs
        .readdirSync(templatesPath)
        .filter(
            (templateName: string) => !NON_SITE_TEMPLATES.includes(templateName)
        );

    if (!entityName) {
        console.log('missing site name.');
        return;
    }

    const configurationFilepath =
        cwd + '/' + MONO_REPO_LAYOUT_CONFIGURATION_FILENAME;

    let template = '',
        outputDir = '';

    if (fs.existsSync(configurationFilepath)) {
        const layoutConfiguration = fs.readJsonSync(configurationFilepath);

        let packageName = '';

        if (Object.keys(layoutConfiguration).length === 1) {
            packageName = Object.keys(layoutConfiguration)[0];
        } else {
            packageName = await autoComplete(
                'Pick the relevant package',
                Object.keys(layoutConfiguration)
            );
        }

        const packageConfig = layoutConfiguration[packageName];
        template = packageConfig.template;
        outputDir = `${packageConfig.path}/${entityName}`;
    } else {
        if (templates.length === 1) {
            template = templates[0];
        } else {
            template = await autoComplete('Pick a site template', templates);
        }

        outputDir = entityName.toLocaleLowerCase();
    }

    if (outputDir) {
        outputDir = `${cwd}/${outputDir}`;
    }

    if (fs.pathExistsSync(outputDir)) {
        console.log(chalk.red(`path "${outputDir}" already exists`));
        return;
    }

    command.local.params.template = template;
    command.local.params.outputDir = outputDir;

    command.local.rulesReplaceFileName = {
        componentName: ({ entityName }) => entityName,
    };

    command.local.rulesReplaceContent = {
        '\\$SITE': ({ entityName }) => entityName.toLowerCase(),
    };

    next();
};

const parseInstructions = () => (command: Command, next: any) => {
    next();
};

const postRun = () => (command: Command, next: any) => {
    const { local } = command;
    const { params } = local;
    const { outputDir } = params;

    const cwdInstall = `${outputDir}/scripts`;

    run('chmod', ['+x', 'install.sh'], cwdInstall).then(() => {
        run('./scripts/install.sh', [], outputDir, { stdOutMode: true });
    });

    next();
};

export const middlewares: CreateMiddlewares = {
    preRun,
    parseInstructions,
    postRun,
};
