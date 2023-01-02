import * as admin from 'firebase-admin';
import type { AppOptions } from 'firebase-admin';
import { Json } from '../types';

const SINGLES_COLLECTION_NAME = 'serviceSingles';

export const firebase = {
    single: (name: string) => ({
        get: () => {
            return firebase //
                .collection(SINGLES_COLLECTION_NAME)
                .getById(name);
        },
        patch: (change: Json) => {
            return firebase
                .collection(SINGLES_COLLECTION_NAME)
                .patch(name, change);
        },
    }),
    collection: (name: string) => ({
        get: async () => {
            const snapshot = await admin //
                .firestore()
                .collection(name)
                .get();

            return snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
        },
        getById: async (id: string) => {
            const ref = await admin //
                .firestore()
                .collection(name)
                .doc(id)
                .get();

            return ref.data();
        },
        getByPredicate: async (predicate: Json) => {
            const collection = admin //
                .firestore()
                .collection(name);

            let cursor = collection;

            Object.keys(predicate).forEach((key) => {
                // @ts-ignore
                cursor = cursor.where(key, '==', predicate[key]);
            });

            const snapshot = await cursor.get();
            return snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            })) as Json[];
        },
        add: (data: Json) => {
            return admin //
                .firestore()
                .collection(name)
                .add(data);
        },
        patch: (id: string, change: Json) => {
            return admin //
                .firestore()
                .collection(name)
                .doc(id)
                .set(change, { merge: true });
        },
        delete: (id: string) => {
            return admin //
                .firestore()
                .collection(name)
                .doc(id)
                .delete();
        },
        deleteByPredicate: async (predicate: Json) => {
            const collection = admin //
                .firestore()
                .collection(name);

            let cursor = collection;

            Object.keys(predicate).forEach((key) => {
                // @ts-ignore
                cursor = cursor.where(key, '==', predicate[key]);
            });
            const items = await cursor.get();

            const promises: Promise<admin.firestore.WriteResult>[] = [];

            items.forEach((item) => {
                const promise = item.ref.delete();
                promises.push(promise);
            });

            return Promise.all(promises);
        },
    }),
};

export const initFirebase = (options?: AppOptions) => {
    admin.initializeApp(options);
};

export const parseFirebaseRestResponse = (data: Json) => {
    const { fields } = data;

    return Object.keys(fields).reduce((acc: Json, key: string) => {
        const value = fields[key];
        const { stringValue, integerValue, booleanValue } = value;

        if (stringValue) {
            acc[key] = stringValue;
        } else if (integerValue) {
            acc[key] = parseFloat(integerValue);
        } else if (booleanValue) {
            acc[key] = booleanValue === 'true';
        }

        return acc;
    }, {} as Json);
};
