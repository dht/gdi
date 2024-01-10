import { FirebaseApp, initializeApp } from 'firebase/app';
import { Firestore, getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { Auth, getAuth, User, connectAuthEmulator } from 'firebase/auth';
import { Analytics, getAnalytics } from 'firebase/analytics';
import { clearLogs } from './firebase.logs';
import { Json, ToastMethod } from './types';
import { initFunctions } from './firebase.functions';

export let app: FirebaseApp;
export let db: Firestore;
export let auth: Auth;
export let analytics: Analytics;

export const initFirebase = (
  firebaseConfig: Json,
  useEmulator: boolean = false,
  toastMethod: ToastMethod
) => {
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
  auth = getAuth(app);
  analytics = getAnalytics(app);

  initFunctions(firebaseConfig.projectId, useEmulator, toastMethod);

  if (useEmulator) {
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
