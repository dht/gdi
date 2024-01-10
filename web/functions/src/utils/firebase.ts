import * as admin from 'firebase-admin';
import { setBucket } from '../api/files';
import { Json } from '../types';

export let auth: any;
export let bucket: any;
export let firestore: any;

export const initFirebase = () => {
  admin.initializeApp();

  auth = admin.auth();
  bucket = admin.storage().bucket();
  firestore = admin.firestore();
  setBucket(bucket);
};

export const getCollection = async (path: string) => {
  const collection = await firestore.collection(path).get();
  const documents = collection.docs.map((doc: any) => doc.data());
  return documents;
};

export const getItem = async (path: string) => {
  const doc = await firestore.doc(path).get();
  return doc.data();
};

export const patchItem = async (path: string, change: Json, merge: boolean = true) => {
  const response = await firestore.doc(path).set(change, { merge });
  return response;
};

export const setItem = async (path: string, change: Json) => {
  const response = await firestore.doc(path).set(change, { merge: false });
  return response;
};

export const deleteItem = async (path: string) => {
  const response = await firestore.doc(path).delete();
  return response;
};

export const setFirestore = (value: any) => {
  firestore = value;
};

export const deleteCollection = async (path: string) => {
  const collection = await firestore.collection(path).get();

  const batch = firestore.batch();
  collection.docs.forEach((doc: any) => batch.delete(doc.ref));
  await batch.commit();
};

export const setCollection = async (path: string, arr: Json[]) => {
  const batch = firestore.batch();
  arr.forEach((item: any) => {
    const ref = firestore.doc(`${path}/${item.id}`);
    batch.set(ref, item);
  });
  await batch.commit();
};

export const replaceCollection = async (path: string, arr: Json | Json[]) => {
  const data = Array.isArray(arr) ? arr : Object.values(arr);
  await deleteCollection(path);
  await setCollection(path, data);
};
