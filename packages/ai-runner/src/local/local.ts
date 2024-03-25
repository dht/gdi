import kleur from 'kleur';
import { Server } from 'socket.io';
import { FsDbAdapter, FsSocketsAdapter, FsStorageAdapter } from './adapters';
import { midAllowedDomains, midData, midUser } from './midLocal';
import { setSocketsAdapter } from './utils/globals';
import { createServer } from 'http';
import { initRunner } from '../runner';
import { Json } from '../types';
import express from 'express';
import path from 'path';
import { midLogger } from '../middlewares/midLogger';
import './utils/require';

export type LocalParams = {
  rootPath: string;
  apiKeys: Json;
  allowedDomains: string[];
  port: number;
};

export const startLocalInstance = (params: LocalParams) => {
  const { rootPath, apiKeys, allowedDomains, port } = params;

  const root = path.resolve(rootPath);
  console.log(root);

  const localInstanceUrl = `http://localhost:${port}`;

  const dbAdapter = new FsDbAdapter(rootPath, '/db', apiKeys);
  const storageAdapter = new FsStorageAdapter(rootPath, '/assets', localInstanceUrl);

  const midStatic = express.static(path.resolve(rootPath, 'assets'));

  const app = initRunner({
    apiKeys,
    allowedDomains,
    dbAdapter,
    storageAdapter,
    root: '/api',
    middlewares: [midStatic, midAllowedDomains(allowedDomains), midLogger, midUser, midData],
    isLocalInstance: true,
    fileSizeLimit: '100mb',
  });

  // public
  const server = createServer(app);

  // allow only https://usegdi.com

  const io = new Server(server, {
    cors: {
      origin: (origin?: string, callback?: any) => {
        if (origin && allowedDomains.includes(origin)) {
          callback(null, true);
        } else {
          callback(new Error('Not allowed by CORS'));
        }
      },
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      credentials: true,
      optionsSuccessStatus: 204,
    },
  });

  const socketsAdapter = new FsSocketsAdapter(io);
  setSocketsAdapter(socketsAdapter);

  server.listen(port, () => {
    console.log(kleur.green(`Listening on port ${port}...`));
  });
};
