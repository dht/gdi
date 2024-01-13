import { DBAdapter, StorageAdapter } from '../types';
import { FsSocketsAdapter } from '../local';

export let dbAdapter: DBAdapter,
  storageAdapter: StorageAdapter,
  isLocalInstance: boolean = false;

export const setDbAdapter = (value: any) => {
  dbAdapter = value;
};

export const getDbAdapter = () => {
  return dbAdapter;
};

export const setStorageAdapter = (value: any) => {
  storageAdapter = value;
};

export const getStorageAdapter = () => {
  return storageAdapter;
};

export const setIsLocalInstance = (value: boolean) => {
  isLocalInstance = value;
};
