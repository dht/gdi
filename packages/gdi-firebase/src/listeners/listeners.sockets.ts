import { collection, doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import type { Callback } from '../types';
import { io } from 'socket.io-client';
import { localInstanceUrl } from '../globals';

let client: any;

const callbacks: any = {};

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
  callbacks[docPath] = {
    docPath,
    callback,
  };

  client.emit('addListener', { docPath });

  return () => {
    // removeListener is a reserved socket.io event
    client.emit('rmListener', { docPath });
    delete callbacks[docPath];
  };
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

  client.on('data/change', (message: any) => {
    const { docPath, data } = message;

    console.log('data/change =>', docPath, data);

    const callback = callbacks[docPath];

    if (!callback) {
      console.log('no callback for path', docPath);
      return;
    }

    callback.callback(data);
  });
};
