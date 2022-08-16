import { doc, getFirestore, setDoc, writeBatch } from 'firebase/firestore/lite';
import { firebaseConfig } from './firebase.config';
import { initialData } from './firebase.initialData';
import { initializeApp } from 'firebase/app';
import { config } from 'dotenv-flow';

config();

type Json = Record<string, any>;

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const ts = () => new Date().toISOString();

const generateCreatedDate = () => ({
    _createdDate: ts(),
});

const generateModifiedDate = () => ({
    _modifiedDate: ts(),
});

const withDates = (
    data: Json,
    withCreatedDate: boolean,
    withModifiedDate: boolean
) => {
    let output = { ...data };

    if (withCreatedDate) {
        output = { ...output, ...generateCreatedDate() };
    }

    if (withModifiedDate) {
        output = { ...output, ...generateModifiedDate() };
    }

    return output;
};

function singlePatch(nodeName: string, data: Json) {
    const ref = doc(db, 'singles', nodeName);
    return setDoc(ref, withDates(data, false, true), { merge: true });
}

function collectionAddMany(nodeName: string, data: Json) {
    const batch = writeBatch(db);

    Object.keys(data).forEach((id) => {
        const ref = doc(db, nodeName, id);
        batch.set(ref, data[id]);
    });

    return batch.commit();
}

const nodeTypes: Json = {
    appStateMixer: 'single',
    meta: 'single',
    currentIds: 'single',
    libraryImages: 'collection',
    libraryWidgets: 'collection',
    libraryTypography: 'collection',
    libraryPalettes: 'collection',
    locales: 'collection',
    packages: 'single',
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

    promises = getByType('single').map(([key, data]) => {
        console.log(key + '->', 'single');
        return singlePatch(key, { id: key, ...data });
    });

    await Promise.all(promises);

    promises = getByType('collection').map(([key, data]) => {
        console.log(key + '->', 'collection');
        return collectionAddMany(key, data);
    });

    await Promise.all(promises);
    console.log('done');
};

run();
