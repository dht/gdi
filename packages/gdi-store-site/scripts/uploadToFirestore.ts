import { initializeApp } from 'firebase/app';
import {
    getFirestore,
    collection,
    getDocs,
    setDoc,
    getDoc,
    deleteDoc,
    doc,
    addDoc,
    writeBatch,
} from 'firebase/firestore/lite';
import state from './state';

type Json = Record<string, any>;

const firebaseConfig = {
    apiKey: 'AIzaSyCf029JwrJoA-9CHtweZHqD0z-KXGNVnX8',
    authDomain: 'amazing-de4d0.firebaseapp.com',
    databaseURL: 'https://amazing-de4d0.firebaseio.com',
    projectId: 'amazing-de4d0',
    storageBucket: 'amazing-de4d0.appspot.com',
    messagingSenderId: '114773355011',
    appId: '1:114773355011:web:15a08553322f1cfa8c7c36',
};

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

async function singleGet(nodeName: string) {
    const ref = doc(db, 'singles', nodeName);
    const response = await getDoc(ref);
    return response.data();
}

function singlePatch(nodeName: string, data: Json) {
    const ref = doc(db, 'singles', nodeName);
    return setDoc(ref, withDates(data, false, true), { merge: true });
}

async function collectionGet(nodeName: string) {
    const ref = collection(db, nodeName);
    const snapshot = await getDocs(ref);
    return snapshot.docs.map((doc) => doc.data());
}

function collectionUpdateMany(nodeName: string, data: Json) {
    const batch = writeBatch(db);

    Object.keys(data).forEach((id) => {
        const ref = doc(db, nodeName, id);
        batch.update(ref, data[id]);
    });

    return batch.commit();
}

function collectionAddMany(nodeName: string, data: Json) {
    const batch = writeBatch(db);

    Object.keys(data).forEach((id) => {
        const ref = doc(db, nodeName, id);
        batch.set(ref, data[id]);
    });

    return batch.commit();
}

function collectionDeleteMany(nodeName: string, ids: string[]) {
    const batch = writeBatch(db);

    ids.forEach((id) => {
        const ref = doc(db, nodeName, id);
        batch.delete(ref);
    });

    return batch.commit();
}

function collectionPatchItem(nodeName: string, id: string, data: Json) {
    const ref = doc(db, nodeName, id);
    return setDoc(ref, withDates(data, false, true), { merge: true });
}

function collectionDeleteItem(nodeName: string, id: string) {
    const ref = doc(db, nodeName, id);
    return deleteDoc(ref);
}

function collectionAddItem(nodeName: string, data: Json) {
    const ref = collection(db, nodeName);
    return addDoc(ref, withDates(data, true, true));
}

const nodeTypes = {
    meta: 'single',
    palette: 'single',
    fontSizes: 'single',
    spacing: 'single',
    fonts: 'single',
    instances: 'collection',
    widgets: 'collection',
    instancesMapColors: 'collection',
    instancesMapStrings: 'collection',
    instancesProps: 'collection',
    strings: 'single',
};

const getByType = (nodeType: string) => {
    return Object.keys(nodeTypes)
        .filter((key) => nodeTypes[key] === nodeType)
        .map((key) => {
            const nodeData = state[key];
            return [key, nodeData];
        });
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
