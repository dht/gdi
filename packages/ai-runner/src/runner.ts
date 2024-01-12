import cors from 'cors';
import express from 'express';
import { router as routerAccount } from './routes/account';
import { router as routerAi } from './routes/ai';
import { router as routerAssets } from './routes/assets';
import { router as routerBoards } from './routes/boards';
import { router as routerDocument } from './routes/document';
import { router as routerEcho } from './routes/echo';
import { router as routerPlaybacks } from './routes/playbacks';
import { router as routerSaves } from './routes/saves';
import { router as routerTags } from './routes/tags';
import { DBAdapter, StorageAdapter } from './types';
import { setDbAdapter, setStorageAdapter } from './utils/globals';

export type Params = {
  apiKeys: Json;
  allowedDomains: string[];
  middlewares?: any[];
  dbAdapter: DBAdapter;
  storageAdapter: StorageAdapter;
};

export const initRunner = (params: Params) => {
  const { dbAdapter, storageAdapter, apiKeys, allowedDomains, middlewares = [] } = params;

  setDbAdapter(dbAdapter);
  setStorageAdapter(storageAdapter);

  const app = express();

  app.use(
    cors({
      origin: true, // or http://...
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    })
  );
  app.use(express.json());

  middlewares.forEach((middleware) => app.use(middleware));

  app.use('/ai', routerAi);
  app.use('/assets', routerAssets);
  app.use('/account', routerAccount);
  app.use('/boards', routerBoards);
  app.use('/document', routerDocument);
  app.use('/playbacks', routerPlaybacks);
  app.use('/saves', routerSaves);
  app.use('/echo', routerEcho);
  app.use('/tags', routerTags);

  return app;
};
