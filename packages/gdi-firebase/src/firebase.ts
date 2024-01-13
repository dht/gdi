import { Analytics, getAnalytics } from 'firebase/analytics';
import { FirebaseApp, initializeApp } from 'firebase/app';
import { Auth, connectAuthEmulator, getAuth } from 'firebase/auth';
import { Firestore, connectFirestoreEmulator, getFirestore } from 'firebase/firestore';
import { initFunctions } from './firebase.functions';
import { Params } from './types';
import { setIsLocalInstance, setLocalInstanceUrl } from './globals';
import { initSocketConnection } from './listeners/listeners.sockets';

export let app: FirebaseApp;
export let db: Firestore;
export let auth: Auth;
export let analytics: Analytics;

export const initFirebase = (params: Params) => {
  const { config, isEmulator, isLocalInstance, localInstanceUrl } = params;
  app = initializeApp(config);
  db = getFirestore(app);
  auth = getAuth(app);
  analytics = getAnalytics(app);

  setIsLocalInstance(isLocalInstance);
  setLocalInstanceUrl(localInstanceUrl);

  initFunctions(params);

  if (isLocalInstance) {
    initSocketConnection();
  }

  if (isEmulator) {
    connectAuthEmulator(auth, 'http://localhost:9099');
    connectFirestoreEmulator(db, 'localhost', 8080);
  }

  // clearLogs();

  return {
    app,
    db,
    auth,
    analytics,
  };
};
