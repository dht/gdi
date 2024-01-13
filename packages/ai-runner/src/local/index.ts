import { LocalParams, startLocalInstance } from './local';
import { readEnv } from './utils/env';
export { FsDbAdapter, FsSocketsAdapter, FsStorageAdapter } from './adapters';
export { handleRequest, init } from './fileDb';

const apiKeys = readEnv();

const params: LocalParams = {
  rootPath: 'temp',
  apiKeys: {},
  allowedDomains: ['http://localhost:3005'],
  port: 3005,
};

const run = async () => {
  startLocalInstance(params);
};

run();
