import { isLocalInstance } from '../globals';
import type { Callback } from '../types';
import * as firebase from './listeners.firebase';
import * as sockets from './listeners.sockets';

// listen to subCollection
export const listenToSubCollection = (
  collectionName: string,
  documentId: string,
  subCollectionName: string,
  callback: Callback
) => {
  if (isLocalInstance) {
    return sockets.listenToDocument(collectionName, documentId, callback);
  } else {
    return firebase.listenToSubCollection(collectionName, documentId, subCollectionName, callback);
  }
};

export const listenToDocument = (
  collectionName: string,
  documentId: string,
  callback: Callback
) => {
  if (isLocalInstance) {
    return sockets.listenToDocument(collectionName, documentId, callback);
  } else {
    return firebase.listenToDocument(collectionName, documentId, callback);
  }
};

export const listenToDocumentPath = (docPath: string, callback: Callback) => {
  if (isLocalInstance) {
    return sockets.listenToDocumentPath(docPath, callback);
  } else {
    return firebase.listenToDocumentPath(docPath, callback);
  }
};

const rnd1 = Math.floor(Math.random() * 3);
const rnd2 = Math.floor(Math.random() * 3);
const comment = ['Stunning', 'Beautiful', 'Gorgeous'][rnd1] + ' ' + '😍'.repeat(rnd2);
console.log(comment);
