import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebase';

export const getPlayback = async (playbackId: string) => {
  const ref = doc(db, 'playbacks', playbackId);

  const snapshot = await getDoc(ref);
  const data = snapshot.data();

  return data;
};
