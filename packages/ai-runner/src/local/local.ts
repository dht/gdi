import kleur from 'kleur';
import { Server } from 'socket.io';
import { FsDbAdapter, FsSocketsAdapter, FsStorageAdapter } from './adapters';
import { midData, midLogger, midUser } from './midLocal';
import { setSocketsAdapter } from './utils/globals';
import * as http from 'http';
import { initRunner } from '../runner';
import { Json } from '../types';

export type LocalParams = {
  rootPath: string;
  apiKeys: Json;
  allowedDomains: string[];
  port: number;
};

export const startLocalInstance = (params: LocalParams) => {
  const { rootPath, apiKeys, allowedDomains, port } = params;

  const dbAdapter = new FsDbAdapter(rootPath, '/db', apiKeys);
  const storageAdapter = new FsStorageAdapter(rootPath, '/assets');

  const app = initRunner({
    apiKeys,
    allowedDomains,
    dbAdapter,
    storageAdapter,
    root: '/api',
    middlewares: [midLogger, midUser, midData],
    isLocalInstance: true,
  });

  const server = http.createServer(app);

  const io = new Server(server, {
    cors: {
      origin: '*',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      credentials: true,
      optionsSuccessStatus: 204,
    },
  });

  const socketsAdapter = new FsSocketsAdapter(io);
  setSocketsAdapter(socketsAdapter);

  server.listen(port, () => {
    console.log(kleur.green(`Listening on port ${port}`));
  });
};
