import { firebase } from './methods.firebase.base';
// import { firebase } from 'firestore-local';
import { firebaseConfig } from '../../../firebaseConfig';

let state: Json = {};

type Json = Record<string, any>;

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.getFirestore(app);

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
    const ref = firebase.doc(db, 'singles', nodeName);
    const response = await firebase.getDoc(ref);
    return response.data();
}

function singlePatch(nodeName: string, data: Json) {
    const ref = firebase.doc(db, 'singles', nodeName);
    return firebase.setDoc(ref, withDates(data, false, true), { merge: true });
}

async function collectionGet(nodeName: string) {
    const ref = firebase.collection(db, nodeName);
    const snapshot = await firebase.getDocs(ref);
    return snapshot.docs.map((doc) => doc.data());
}

function collectionUpdateMany(nodeName: string, data: Json) {
    const batch = firebase.writeBatch(db);

    Object.keys(data).forEach((id) => {
        const ref = firebase.doc(db, nodeName, id);
        batch.update(ref, data[id]);
    });

    return batch.commit();
}

function collectionAddMany(nodeName: string, data: Json) {
    const batch = firebase.writeBatch(db);

    Object.keys(data).forEach((id) => {
        const ref = firebase.doc(db, nodeName, id);
        batch.set(ref, data[id]);
    });

    return batch.commit();
}

function collectionDeleteMany(nodeName: string, ids: string[]) {
    const batch = firebase.writeBatch(db);

    ids.forEach((id) => {
        const ref = firebase.doc(db, nodeName, id);
        batch.delete(ref);
    });

    return batch.commit();
}

function collectionPatchItem(nodeName: string, id: string, data: Json) {
    const ref = firebase.doc(db, nodeName, id);
    return firebase.setDoc(ref, withDates(data, false, true), { merge: true });
}

function groupedListSetItem(
    nodeName: string,
    id: string,
    itemId: string,
    data: Json
) {
    const ref = firebase.doc(db, nodeName, id, 'items', itemId);
    return firebase.setDoc(ref, withDates(data, false, true));
}

async function groupedListPatch(nodeName: string, dataAll: Json) {
    for (let data of Object.values(dataAll)) {
        const { items } = data;
        delete data['items'];

        await collectionPatchItem(nodeName, data.id, data);

        for (let item of items) {
            await groupedListSetItem(nodeName, data.id, item.id, item);
        }
    }
}

const getByType = (nodeTypes: Json, nodeType: string) => {
    return Object.keys(nodeTypes)
        .filter((key) => nodeTypes[key] === nodeType)
        .map((key) => {
            const nodeData = state[key];
            return [key, nodeData];
        }) as [string, Json][];
};

export const upload = async (data: Json, nodeTypes: Json) => {
    state = data;
    let promises: Promise<any>[];

    promises = getByType(nodeTypes, 'single').map(([key, data]) => {
        console.log(key + '->', 'single');
        return singlePatch(key, { id: key, ...data });
    });

    await Promise.all(promises);

    promises = getByType(nodeTypes, 'collection').map(([key, data]) => {
        console.log(key + '->', 'collection');
        return collectionAddMany(key, data);
    });

    await Promise.all(promises);

    promises = getByType(nodeTypes, 'groupedList').map(([key, data]) => {
        console.log(key + '->', 'groupedList');
        return groupedListPatch(key, data);
    });

    await Promise.all(promises);

    console.log('done');
};
