import { initRunner } from '@gdi/ai-runner';
import chalk from 'chalk';
import { Server } from 'socket.io';
import { FsDbAdapter } from './start.adapters.db';
import { FsSocketsAdapter } from './start.adapters.sockets';
import { FsStorageAdapter } from './start.adapters.storage';
import { midData, midLogger, midUser } from './start.middlewares';
import { preRun } from './start.prerun';
import { setSocketsAdapter } from '../../utils/globals';
import * as http from 'http';

export type StartParams = {};

export const main = () => {
  const params = preRun();

  if (!params.isOk) {
    return;
  }

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

  app.listen(port, () => {
    console.log(chalk.green(`Listening on port ${port}`));
  });
};
