import * as fs from 'fs';
import * as path from 'path';
import { cert, initializeApp as initializeAppAdmin } from 'firebase-admin/app';
import { getStorage } from 'firebase-admin/storage';
import { initializeApp } from 'firebase/app';
import {
    doc,
    getFirestore,
    setDoc,
    writeBatch,
    deleteDoc,
    collection,
    getDocs,
} from 'firebase/firestore/lite';
import type { Firestore } from 'firebase/firestore/lite';
import type { Bucket } from '@google-cloud/storage';

let db: Firestore;

// ================================================

type FirebaseConfig = {
    apiKey: string;
    authDomain: string;
    databaseURL: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
    measurementId: string;
};

export const initFirebase = (config: FirebaseConfig) => {
    const app = initializeApp(config);
    db = getFirestore(app);
};

export const initFirebaseVite = (env: Json) => {
    const firebaseConfig: FirebaseConfig = {
        apiKey: env['VITE_FIREBASE_API_KEY_1'],
        authDomain: env['VITE_FIREBASE_AUTH_DOMAIN_1'],
        databaseURL: env['VITE_FIREBASE_DATABASE_URL_1'],
        projectId: env['VITE_FIREBASE_PROJECT_ID_1'],
        storageBucket: env['VITE_FIREBASE_STORAGE_BUCKET_1'],
        messagingSenderId: env['VITE_FIREBASE_MESSAGING_SENDER_ID_1'],
        appId: env['VITE_FIREBASE_APP_ID_1'],
        measurementId: env['VITE_FIREBASE_MEASUREMENT_ID_1'],
    };

    initFirebase(firebaseConfig);
};

export const initFirebaseAdmin = () => {
    const serviceAccountPath = path.resolve(
        '../../firebaseServiceAccount.json'
    );

    console.log('serviceAccountPath ->', serviceAccountPath);

    if (!fs.existsSync(serviceAccountPath)) {
        throw new Error('Service account file not found');
    }

    const serviceAccountJson = fs.readFileSync(serviceAccountPath, 'utf8');
    const serviceAccount = JSON.parse(serviceAccountJson);
    const { project_id } = serviceAccount;

    initializeAppAdmin({
        credential: cert(serviceAccountPath),
        databaseURL: `https://${project_id}.firebaseio.com`,
        storageBucket: `gs://${project_id}.appspot.com`,
    });

    return getStorage().bucket();
};

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

export function singlePatch(nodeName: string, data: Json) {
    const ref = doc(db, 'singles', nodeName);
    return setDoc(ref, withDates(data, false, true), { merge: true });
}

export function collectionPatchItem(nodeName: string, id: string, data: Json) {
    const ref = doc(db, nodeName, id);
    return setDoc(ref, withDates(data, false, true), { merge: true });
}

export function collectionAddMany(nodeName: string, data: Json) {
    const batch = writeBatch(db);

    Object.keys(data).forEach((id) => {
        const ref = doc(db, nodeName, id);
        batch.set(ref, data[id]);
    });

    return batch.commit();
}

export function collectionDeleteMany(nodeName: string, ids: string[]) {
    const batch = writeBatch(db);

    ids.forEach((id) => {
        const ref = doc(db, nodeName, id);
        batch.delete(ref);
    });

    return batch.commit();
}

export function collectionDeleteItem(nodeName: string, id: string) {
    const ref = doc(db, nodeName, id);
    return deleteDoc(ref);
}

export async function collectionGet(nodeName: string) {
    const ref = collection(db, nodeName);
    const snapshot = await getDocs(ref);
    return snapshot.docs.map((doc) => doc.data());
}
