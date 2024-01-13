import { FirebaseApp, initializeApp } from 'firebase/app';
import {
  Firestore,
  collection,
  connectFirestoreEmulator,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  onSnapshot,
  setDoc,
  updateDoc,
  writeBatch,
} from 'firebase/firestore';
import { Json } from '../types';
import { ResponseBuilder } from './response';

// Initialize Firebase
let app: FirebaseApp, db: Firestore;

export const initFirestore = (firebaseConfig: Json, useEmulator?: boolean) => {
  app = initializeApp(firebaseConfig, 'redux-connected');
  db = getFirestore(app);

  if (useEmulator) {
    connectFirestoreEmulator(db, 'localhost', 8080);
  }
};

export const setFireStore = (value: Firestore) => {
  db = value;
};

export const getCollection = async (path: string) => {
  const response = new ResponseBuilder({} as any);

  const ref = collection(db, path);

  try {
    const snapshot = await getDocs(ref);
    const items = snapshot.docs.map((doc) => doc.data());

    handleSuccess(response, items);
  } catch (err: any) {
    handleError(response, err);
  }

  return response.build<Json[]>();
};

export const addToCollection = async (path: string, item: Json) => {
  const response = new ResponseBuilder({} as any);

  const ref = collection(db, path);
  const docRef = doc(ref, item.id);

  try {
    await setDoc(docRef, item);
    handleSuccess(response, item);
  } catch (err: any) {
    handleError(response, err);
  }

  return response.build<Json>();
};

export const removeCollection = async (path: string) => {
  const response = new ResponseBuilder({} as any);

  const ref = collection(db, path);

  try {
    const snapshot = await getDocs(ref);
    const items = snapshot.docs.map((doc) => doc.data());

    handleSuccess(response, items);
  } catch (err: any) {
    handleError(response, err);
  }

  return response.build<Json[]>();
};

export const addToCollectionBatch = async (path: string, item: Json[]) => {
  const response = new ResponseBuilder({} as any);

  const ref = collection(db, path);
  const batch = writeBatch(db);

  item.forEach((item) => {
    const docRef = doc(ref, item.id);
    batch.set(docRef, item);
  });

  try {
    await batch.commit();
    handleSuccess(response, item);
  } catch (err: any) {
    handleError(response, err);
  }

  return response.build<Json[]>();
};

export const getCollectionItem = async (path: string) => {
  const response = new ResponseBuilder({} as any);

  const ref = doc(db, path);

  try {
    const docSnap = await getDoc(ref);
    const data = docSnap.data() as Json;
    handleSuccess(response, data);
  } catch (err: any) {
    handleError(response, err);
  }

  return response.build<Json>();
};

export const setCollectionItem = async (path: string, value: Json) => {
  const response = new ResponseBuilder({} as any);

  const ref = doc(db, path);

  try {
    await setDoc(ref, value);
    handleSuccess(response, value);
  } catch (err: any) {
    console.log('err =>', err);
    handleError(response, err);
  }

  return response.build<Json>();
};

export const updateCollectionItem = async (path: string, change: Json) => {
  const response = new ResponseBuilder({} as any);

  const ref = doc(db, path);

  try {
    await updateDoc(ref, change);
    const data = await getCollectionItem(path);
    handleSuccess(response, data);
  } catch (err: any) {
    console.log('err =>', err);
    handleError(response, err);
  }

  return response.build<Json>();
};

export const removeCollectionItem = async (path: string) => {
  const response = new ResponseBuilder({} as any);

  const ref = doc(db, path);

  try {
    await deleteDoc(ref);
    handleSuccess(response, {});
  } catch (err: any) {
    handleError(response, err);
  }

  return response.build<Json>();
};

export const listenToCollection = (path: string, callback: any) => {
  const ref = collection(db, path);

  return onSnapshot(ref, (snapshot) => {
    const change = snapshot.docChanges()[0];
    const item = change.doc.data();
    callback(item);
  });
};

export const setSingle = async (path: string, change: Json) => {
  const response = new ResponseBuilder({} as any);

  const ref = doc(db, path);

  try {
    await setDoc(ref, change);
    const data = await getSingle(path);
    handleSuccess(response, data);
  } catch (err: any) {
    console.log('err =>', err);
    handleError(response, err);
  }

  return response.build<Json>();
};

export const getSingle = async (path: string) => {
  const response = new ResponseBuilder({} as any);

  const ref = doc(db, path);

  try {
    const docSnap = await getDoc(ref);
    const data = docSnap.data() as Json;
    handleSuccess(response, data);
  } catch (err: any) {
    handleError(response, err);
  }

  return response.build<Json>();
};

export const handleSuccess = (
  response: ResponseBuilder,
  data: Json | Json[]
) => {
  response
    .withData(data) //
    .withIsSuccess(true);
};

export const handleError = (response: ResponseBuilder, err: any) => {
  response
    .withErrorMessage(err.message) //
    .withIsError(true)
    .withIsSuccess(false);
};
