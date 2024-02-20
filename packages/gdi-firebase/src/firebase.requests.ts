import { auth } from './firebase';
import { listenToDocumentPath } from './listeners';
import type { Callback } from './types';

export const listenToFlow = (callback: Callback) => {
  const userId = auth.currentUser?.uid ?? '';

  return listenToDocumentPath(`userData/${userId}/flowRuns/default`, callback);
};

export const listenToMessageStream = (callback: Callback) => {
  const userId = auth.currentUser?.uid ?? '';

  return listenToDocumentPath(`userData/${userId}/messages/default`, callback);
};
