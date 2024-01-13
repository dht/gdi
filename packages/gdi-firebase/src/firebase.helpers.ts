import { collection, doc, onSnapshot } from 'firebase/firestore';
import { db } from './firebase';
import type { Callback } from './types';

// listen to subCollection
export const listenToSubCollection = (
  collectionName: string,
  documentId: string,
  subCollectionName: string,
  callback: Callback
) => {
  const ref = collection(db, collectionName, documentId, subCollectionName);

  // get ref data

  console.log('listenToSubCollection collectionName ->', collectionName);

  return onSnapshot(
    ref,
    (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === 'added') {
          callback(change.doc.data());
        }
      });
    },
    (error: any) => {
      console.error('Error getting document:', error);
    }
  );
};

export const listenToDocument = (
  collectionName: string,
  documentId: string,
  callback: Callback
) => {
  const ref = doc(db, collectionName, documentId);

  console.log('listenToDocument collectionName ->', collectionName);

  return onSnapshot(
    ref,
    (snapshot) => {
      callback(snapshot.data());
    },
    (error: any) => {
      console.error('Error getting document:', error);
    }
  );
};

export const listenToDocumentPath = (docPath: string, callback: Callback) => {
  const ref = doc(db, docPath);

  console.log('docPath ->', docPath);

  return onSnapshot(
    ref,
    (snapshot) => {
      callback(snapshot.data());
    },
    (error: any) => {
      console.error('Error getting document:', error);
    }
  );
};
