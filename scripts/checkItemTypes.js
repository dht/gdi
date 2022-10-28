const fs = require('fs');
const p = require('../package.json');
const globby = require('globby');
const path = require('path');
const _ = require('lodash');
const chalk = require('chalk');

const root = path.resolve(__dirname, '..');
const pathTables = `${root}/packages/gdi-web-tables`;
const pathPreviews = `${root}/packages/gdi-web-tables/src/components/PreviewModal/preview`;
const pathItems = `${root}/packages/gdi-web-tables/src/components/Galleries/items`;

const ONLY_SHOW_MISSING = true;

const run = async () => {
    let content;

    content = fs.readFileSync(`${pathTables}/src/types.ts`, 'utf-8');
    const itemTypes = getItemTypes(content);

    const previews = getPreviews();
    const items = getGalleryItems();
    const definitions = getDefinitions();

    itemTypes.forEach((itemType) => {
        const itemTypeCapital = _.upperFirst(itemType);

        const previewOk = previews.includes(`Preview${itemTypeCapital}`);
        log(itemType, 'preview', previewOk);

        const itemOk = items.includes(`Item${itemTypeCapital}`);
        log(itemType, 'galleryItem', itemOk);

        const definitionsPerItem = definitions.filter((d) => {
            const fileName = d.split('/').pop();

            return fileName.match(`${itemType}[s\.]\.`);
        });
        const definitionsCount = definitionsPerItem.length;

        const definitionsOk = definitionsCount > 10;
        log(itemType, 'definitions', definitionsOk, definitionsCount);
    });

    console.log(chalk.yellow(header('summary')));
    console.log(chalk.green(`${itemTypes.length} items\n`));
};

const cache = {};

const showHeader = (itemType) => {
    if (cache[itemType]) {
        return;
    }

    console.log(chalk.yellow(header(itemType)));
    cache[itemType] = true;
};

const log = (itemType, category, isOk, count) => {
    const countText = count > 0 ? ` (${count})` : '';

    if (!isOk) {
        showHeader(itemType);
        process.stdout.write(`${category}... `);
        console.log(chalk.red('Missing'));
    } else if (!ONLY_SHOW_MISSING) {
        showHeader(itemType);
        process.stdout.write(`${category}... `);
        console.log(chalk.green(`Ok ${countText}`));
    }
};

const getPreviews = () => {
    return globby.sync('*', {
        cwd: pathPreviews,
        onlyDirectories: true,
    });
};

const getGalleryItems = () => {
    return globby.sync('*', {
        cwd: pathItems,
        onlyDirectories: true,
    });
};

const getDefinitions = () => {
    return globby.sync('**/d.*.yml', {
        cwd: root,
        ignore: ['**/node_modules/**'],
    });
};

const getItemTypes = (content) => {
    const regex = /export type ItemType =([^;]+)/gim;

    const match = content.match(regex);

    if (!match) {
        return;
    }

    return match[0]
        .split('\n')
        .filter((i) => {
            return !i.match(/^export/) && !i.match('/');
        })
        .map((i) => i.replace(/[|']/g, ''))
        .map((i) => i.trim())
        .filter((i) => i)
        .sort();
};

const header = (text) => {
    return [
        '\n',
        '='.repeat(Math.floor((35 - text.length) / 2)),
        ' ',
        text,
        ' ',
        '='.repeat(Math.ceil((35 - text.length) / 2)),
    ].join('');
};
run();
