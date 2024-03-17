import { LocalParams, startLocalInstance } from './local';
import { readEnv } from './utils/env';
export { FsDbAdapter, FsSocketsAdapter, FsStorageAdapter } from './adapters';
export { handleRequest, init } from './fileDb';
import { config } from 'dotenv';

config();

const debugRoot = process.env.DEBUG_ROOT || 'temp';

const apiKeys = readEnv();

const params: LocalParams = {
  rootPath: debugRoot,
  apiKeys,
  allowedDomains: ['http://localhost:3000', 'http://127.0.0.1:3000', 'https://usegdi.com'],
  port: 3005,
};

const run = async () => {
  startLocalInstance(params);
};

run();
