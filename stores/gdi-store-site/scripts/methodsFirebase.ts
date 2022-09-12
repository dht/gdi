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
    updateDoc,
} from 'firebase/firestore/lite';
import { firebaseConfig } from '../../../firebaseConfig';

let state: Json = {};

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

function groupedListPushItem(nodeName: string, id: string, data: Json) {
    const ref = collection(db, nodeName, id, 'items');
    return addDoc(ref, withDates(data, true, true));
}

function groupedListDeleteItem(nodeName: string, id: string, itemId: string) {
    const ref = doc(db, nodeName, id, 'items', itemId);
    return deleteDoc(ref);
}

function groupedListSetItem(
    nodeName: string,
    id: string,
    itemId: string,
    data: Json
) {
    const ref = doc(db, nodeName, id, 'items', itemId);
    return setDoc(ref, withDates(data, false, true));
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
