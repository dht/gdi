import * as admin from 'firebase-admin';
import { Json } from '../../types';

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
        get: () => {
            return admin //
                .firestore()
                .collection(name)
                .get();
        },
        getById: (id: string) => {
            return admin //
                .firestore()
                .collection(name)
                .doc(id)
                .get();
        },
        getByPredicate: (predicate: Json) => {
            const collection = admin //
                .firestore()
                .collection(name);
            let cursor = collection;

            Object.keys(predicate).forEach((key) => {
                // @ts-ignore
                cursor = cursor.where(key, '==', predicate[key]);
            });

            return cursor.get();
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
                .update(change);
        },
        delete: (id: string) => {
            return admin //
                .firestore()
                .collection(name)
                .doc(id)
                .delete();
        },
        deleteByPredicate: async (predicate: Json) => {
            const items = await firebase
                .collection(name)
                .getByPredicate(predicate);

            const promises: Promise<admin.firestore.WriteResult>[] = [];

            items.forEach((item) => {
                const promise = item.ref.delete();
                promises.push(promise);
            });

            return Promise.all(promises);
        },
    }),
};

export const initFirebase = () => {
    admin.initializeApp();
};
