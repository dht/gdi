import cors from 'cors';
import express from 'express';
import { router as routerAccount } from './routes/account';
import { router as routerAi } from './routes/ai';
import { router as routerAssets } from './routes/assets';
import { router as routerBoards } from './routes/boards';
import { router as routerDocument } from './routes/document';
import { router as routerEcho } from './routes/echo';
import { router as routerIssues } from './routes/issues';
import { router as routerPlaybacks } from './routes/playbacks';
import { router as routerMusic } from './routes/music';
import { router as routerSaves } from './routes/saves';
import { router as routerTags } from './routes/tags';
import { DBAdapter, StorageAdapter } from './types';
import { setDbAdapter, setIsLocalInstance, setStorageAdapter } from './utils/globals';

export type Params = {
  apiKeys: Json;
  allowedDomains: string[];
  middlewares?: any[];
  dbAdapter: DBAdapter;
  storageAdapter: StorageAdapter;
  root?: string;
  isLocalInstance: boolean;
  fileSizeLimit?: string;
};

export const initRunner = (params: Params) => {
  const {
    dbAdapter, //
    storageAdapter,
    root = '/',
    isLocalInstance = false,
    middlewares = [],
    fileSizeLimit = '10mb',
  } = params;

  setDbAdapter(dbAdapter);
  setStorageAdapter(storageAdapter);
  setIsLocalInstance(isLocalInstance);

  const app = express();

  app.use(
    cors({
      origin: true, // or http://...
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    })
  );
  app.use(express.json({ limit: fileSizeLimit }));
  app.use(express.urlencoded({ limit: fileSizeLimit, extended: true }));

  middlewares.forEach((middleware) => app.use(middleware));

  const router = express.Router();
  router.use('/ai', routerAi);
  router.use('/assets', routerAssets);
  router.use('/account', routerAccount);
  router.use('/boards', routerBoards);
  router.use('/document', routerDocument);
  router.use('/issues', routerIssues);
  router.use('/playbacks', routerPlaybacks);
  router.use('/music', routerMusic);
  router.use('/saves', routerSaves);
  router.use('/echo', routerEcho);
  router.use('/tags', routerTags);

  app.use(root, router);

  return app;
};
