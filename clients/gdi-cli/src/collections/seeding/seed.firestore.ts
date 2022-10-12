// shortcuts: seed
// desc: generate firestore data
import chalk from 'chalk';
import { envError, readEnvVite } from '../../utils/env';
import { parseArgv } from '../../utils/argv';
import { readJson } from '../../utils/json';
import {
    collectionAddMany,
    initFirebaseVite,
    singlePatch,
} from '../../utils/firestore';

const argv = parseArgv(process.argv);
const { cwd } = argv;
type Json = Record<string, any>;

let initialData = {} as Json;

// ================================================

const nodeTypes: Json = {
    appState: 'single',
    appStateMixer: 'single',
    galleryState: 'single',
    widgetGalleryState: 'single',
    currentIds: 'single',
    me: 'single',
    meta: 'single',
    packages: 'single',
    palette: 'single',
    users: 'collection',
    roles: 'collection',
    libraryWidgets: 'collection',
    libraryImages: 'collection',
    libraryTypography: 'collection',
    libraryPalettes: 'collection',
    instances: 'collection',
    pages: 'collection',
    images: 'collection',
    widgets: 'collection',
    locales: 'collection',
    instancesProps: 'collection',
};

const getByType = (nodeType: string) => {
    return Object.keys(nodeTypes)
        .filter((key) => nodeTypes[key] === nodeType)
        .map((key) => {
            const nodeData = initialData[key];
            return [key, nodeData];
        }) as [string, Json][];
};

const run = async () => {
    let promises: Promise<any>[];

    const envResult = readEnvVite(cwd);

    if (!envResult.success) {
        envError(envResult.error);
        return;
    }

    const initialDataResult = readJson(
        '../templates/data/firebase.initialData.json'
    );

    if (!initialDataResult.success) {
        generalError(initialDataResult.error);
        return;
    }

    initialData = initialDataResult.content;

    initFirebaseVite(envResult.content);

    promises = getByType('single').map(([key, data]) => {
        console.log(key + '... ', chalk.cyan('single'));
        return singlePatch(key, { id: key, ...data });
    });

    await Promise.all(promises);

    promises = getByType('collection').map(([key, data]) => {
        console.log(key + '... ', chalk.magenta('collection'));
        return collectionAddMany(key, data);
    });

    await Promise.all(promises);
    console.log(chalk.green('done'));
};

const generalError = (message: string) => {
    console.log(chalk.red(message));
};

run();
