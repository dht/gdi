import { initRunner, onNewUser, onPrompt } from '@gdi/ai-runner';
import * as functions from 'firebase-functions';
import 'firebase-functions/logger/compat';
import { midAuthenticateByHeaders } from './middlewares/midAuth';
import { FirestoreAdapter } from './utils/db';
import { initFirebase } from './utils/firebase';
import { S3Adapter } from './utils/storage';

const { firestore, bucket } = initFirebase();

const dbAdapter = new FirestoreAdapter(firestore);
const storageAdapter = new S3Adapter(bucket);

const app = initRunner({
  allowedDomains: ['localhost:3000', 'usegdi.com', '127.0.0.1:3000'],
  apiKeys: {},
  middlewares: [midAuthenticateByHeaders],
  dbAdapter,
  storageAdapter,
  isLocalInstance: false,
});

export const api = functions.https.onRequest(app);

export const onPromptTrigger = functions
  .runWith({ memory: '2GB', timeoutSeconds: 540 })
  .firestore.document('/userData/{userId}/prompts/default')
  .onWrite(onPrompt);

export const onUserCreation = functions.firestore //
  .document('/users/{userId}')
  .onCreate(onNewUser);
