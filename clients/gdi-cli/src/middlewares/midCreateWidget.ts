import fs from 'fs-extra';
import chalk from 'chalk';
import cases from '../utils/cases';
import { autoComplete } from '../utils/input';
import { CreateMiddlewares } from '../types';
import { Command } from '../utils/command';

const MONO_REPO_LAYOUT_CONFIGURATION_FILENAME = '.layout.json';
const NON_COMPONENT_TEMPLATES = ['microservice', 'sample'];

const preRun = () => async (command: Command, next: any) => {
    const { local } = command;
    const { params } = local;
    const { cwd, entityName, templatesPath } = params;

    const templates = fs
        .readdirSync(templatesPath)
        .filter(
            (templateName: string) =>
                !NON_COMPONENT_TEMPLATES.includes(templateName)
        );

    if (!entityName) {
        console.log('missing component name.');
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
        template = await autoComplete('Pick a component template', templates);
        outputDir = cases.upperFirst(entityName);
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
        '\\$CMPLC': ({ entityName }) => cases.lowerCase(entityName),
        '\\$CMPCC': ({ entityName }) => cases.camelCase(entityName),
        '\\$CMP': ({ entityName }) => entityName,
    };

    next();
};

const parseInstructions = () => (command: Command, next: any) => {
    next();
};

const postRun = () => (command: Command, next: any) => {
    next();
};

export const middlewares: CreateMiddlewares = {
    preRun,
    parseInstructions,
    postRun,
};
