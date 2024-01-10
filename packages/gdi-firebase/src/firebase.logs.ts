import { collection, doc, getDocs, onSnapshot, setDoc, writeBatch } from 'firebase/firestore';
import type { GdiLog, Callback } from './types';
import { cleanUndefined } from './utils/object';
import { db } from './firebase';

export const newLog = (logData: GdiLog) => {
  return setDoc(doc(db, 'logs', logData.id), {
    ...cleanUndefined(logData),
  }).then(
    () => {
      return {
        id: logData.id,
      };
    },
    (error) => {
      console.error('Error adding document: ', error);
      return {
        id: null,
      };
    }
  );
};

// listen to logs
export const listenToLogs = (callback: Callback) => {
  const ref = collection(db, 'logs');

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

// clear logs with batch
export const clearLogs = () => {
  const ref = collection(db, 'logs');

  const batch = writeBatch(db);

  return getDocs(ref).then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      batch.delete(doc.ref);
    });

    return batch.commit();
  });
};

// recursive clean undefined
