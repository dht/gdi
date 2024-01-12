import { DBAdapter, StorageAdapter } from '../types';

export let dbAdapter: DBAdapter, storageAdapter: StorageAdapter;

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
