import { collection, doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import type { Callback } from '../types';
import { io } from 'socket.io-client';
import { localInstanceUrl } from '../globals';

let client: any;

// listen to subCollection
export const listenToSubCollection = (
  collectionName: string,
  documentId: string,
  subCollectionName: string,
  callback: Callback
) => {
  const ref = collection(db, collectionName, documentId, subCollectionName);

  // get ref data

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

  client.emit('addListener', { path: docPath });
  return;

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

export const initSocketConnection = () => {
  client = io(localInstanceUrl);

  client.on('connect', () => {
    console.log('Connected to the server');
  });

  client.on('disconnect', () => {
    console.log('Disconnected from the server');
  });

  client.on('error', (error: any) => {
    console.log('error -=', error);
  });

  client.on('data/change', (data: any) => {
    console.log('data/change =>', data);
  });
};
