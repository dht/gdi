import chalk from 'chalk';
import fs from 'fs';
import globby from 'globby';
import path from 'path';
import { Command } from '../utils/command';
import { File } from '../types';
import { replaceTextByMap } from '../utils/scaffolding';
import { prettyPath, printTable } from '../utils/console';

type MiddlewareOptions = {
    skip?: boolean;
};

const input =
    (options: MiddlewareOptions = {}) =>
    (command: Command, next: any) => {
        console.time('gathering input');
        if (options.skip) {
            next();
            return;
        }

        const { argv } = command;

        const ROOT_TEMPLATES_PATH = path.resolve(`${__dirname}/../../src/templates/scaffolding`); // prettier-ignore

        const cwd = argv.cwd;

        const entityType = argv._[0];
        const entityName = argv._[1];

        command.local.params = {
            entityType,
            entityName,
            cwd,
            outputDir: `${cwd}/${entityName}`,
            templatesPath: ROOT_TEMPLATES_PATH,
            template: entityType,
            templatePath: '',
        };

        console.timeEnd('gathering input');

        next();
    };

const scanTemplateFiles =
    (options: MiddlewareOptions = {}) =>
    (command: Command, next: any) => {
        if (options.skip) {
            next();
            return;
        }

        console.log(123);

        console.time(`scanning terminal files`);

        const {
            params,
            rulesReplaceFileName = {},
            rulesReplaceContent = {},
        } = command.local;

        console.log('params => ', JSON.stringify(params));

        const { outputDir, templatesPath, template } = params;
        const templatePath = `${templatesPath}/${template}`;

        console.log('path => ', templatePath);

        command.local.params.templatePath = templatePath;
        command.local.filesToCreate = globby
            .sync('**/*', { cwd: templatePath, dot: true })
            .map((file) => {
                const content = fs
                    .readFileSync(`${templatePath}/${file}`)
                    .toString();

                const outputFilepath = replaceTextByMap(
                    `${outputDir}/${file}`,
                    rulesReplaceFileName,
                    params
                );

                const parsedContent = replaceTextByMap(
                    content,
                    rulesReplaceContent,
                    params
                );

                return {
                    filepath: outputFilepath,
                    content: parsedContent,
                };
            });

        console.timeEnd('scanning terminal files');
        next();
    };

const saveToCliDb =
    (options: MiddlewareOptions = {}) =>
    (command: Command, next: any) => {
        if (options.skip) {
            next();
            return;
        }

        next();
    };

const writeFiles =
    (options: MiddlewareOptions = {}) =>
    (command: Command, next: any) => {
        if (options.skip) {
            next();
            return;
        }

        console.time('writing files');

        const { params, filesToCreate } = command.local;
        const { outputDir = '' } = params;

        printTable(
            [
                [chalk.yellow('type'), params.entityType],
                [chalk.yellow('name'), params.entityName],
                [chalk.yellow('source'), prettyPath(params.templatePath)],
                [chalk.yellow('dest'), prettyPath(params.outputDir)],
            ],
            [10, 85]
        );

        fs.mkdirSync(outputDir);

        filesToCreate.forEach((file: File) => {
            const { filepath, content } = file;
            const info = path.parse(filepath);

            if (info.dir) {
                fs.mkdirSync(info.dir, { recursive: true });
            }

            const logArr = [
                chalk.magenta(filepath.replace(outputDir + '/', '')),
                '... ',
            ];

            process.stdout.write(logArr.join(''));
            fs.writeFileSync(filepath, content);
            console.log(chalk.green('Ok'));
        });

        console.timeEnd('writing files');
        next();
    };

export const middlewares = {
    input,
    scanTemplateFiles,
    saveToCliDb,
    writeFiles,
};
