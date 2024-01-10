import cors from 'cors';
import express from 'express';
import * as functions from 'firebase-functions';
import 'firebase-functions/logger/compat';
import { midAuthenticateByHeaders } from './middlewares/midAuth';
import { onNewUser, router as routerAccount } from './routes/account';
import { onPrompt, router as routerAi } from './routes/ai';
import { router as routerAssets } from './routes/assets';
import { router as routerBoards } from './routes/boards';
import { router as routerDocument } from './routes/document';
import { router as routerEcho } from './routes/echo';
import { router as routerPlaybacks } from './routes/playbacks';
import { router as routerSaves } from './routes/saves';
import { router as routerTags } from './routes/tags';
import { initFirebase } from './utils/firebase';

initFirebase();

const app = express();

app.use(
  cors({
    origin: true, // or http://...
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  })
);

// body parser
app.use(express.json());

app.use(midAuthenticateByHeaders);

app.use('/ai', routerAi);
app.use('/assets', routerAssets);
app.use('/account', routerAccount);
app.use('/boards', routerBoards);
app.use('/document', routerDocument);
app.use('/playbacks', routerPlaybacks);
app.use('/saves', routerSaves);
app.use('/echo', routerEcho);
app.use('/tags', routerTags);

export const api = functions.https.onRequest(app);

export const onPromptTrigger = functions
  .runWith({ memory: '2GB', timeoutSeconds: 540 })
  .firestore.document('/userData/{userId}')
  .onWrite(onPrompt);

export const onUserCreation = functions.firestore //
  .document('/users/{userId}')
  .onCreate(onNewUser);

/*
Adhoc usage example from Web:

import { runFunction } from '@gdi/firebase';

runFunction('/api/ai/chat', {
  prompt: 'what is the tenth letter of the abc?',
});
*/
