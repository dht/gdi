import { Json } from '../types';
import fs from 'fs-extra';
import { get, set, merge } from 'lodash';
import { socketsAdapter } from '../utils/globals';
import { unScopePath } from '../utils/xpath';

export let dbRoot = '';
export const db: any = {};

export const initDb = (root: string) => {
  dbRoot = root;
  initialRead();
};

export const getPath = (path: string) => {
  return get(db, path);
};

export const getCollection = async (xpath: string) => {
  const pathInfo = unScopePath(xpath);
  const data = get(db, pathInfo.path);

  return Object.values(data ?? {}) as Json[];
};

export const deleteItem = async (xpath: string) => {
  const pathInfo = unScopePath(xpath);
};

export const getItem = async (xpath: string) => {
  const pathInfo = unScopePath(xpath);
  const { path, isUserData, collectionName } = pathInfo;

  if (!isUserData) {
    return get(db, path);
  }

  const q = path.split('/');

  return get(db, q);
};

export const setItem = async (xpath: string, item: any) => {
  const pathInfo = unScopePath(xpath);
  const { path, isUserData, collectionName } = pathInfo;

  if (!isUserData) {
    return;
  }

  const q = path.split('/');

  set(db, q, item);

  verifyCollectionRoot(collectionName);

  const filePath = dbRoot + '/' + path + '.json';
  fs.writeJsonSync(filePath, item, { spaces: 2 });
};

export const patchItem = async (xpath: string, change: any, withMerge: boolean) => {
  const pathInfo = unScopePath(xpath);
  const { path, collectionName } = pathInfo;

  const q = path.split('/');
  const currentData = get(db, q, {});

  const newData = withMerge ? merge(currentData, change) : { ...currentData, ...change };

  verifyCollectionRoot(collectionName);

  socketsAdapter.invokeListeners(xpath, newData);

  set(db, q, newData);

  fs.writeJsonSync(dbRoot + '/' + path + '.json', newData, { spaces: 2 });
};

export const replaceCollection = async (xpath: string, obj: any) => {
  const pathInfo = unScopePath(xpath);
  const { path, collectionName } = pathInfo;

  const q = path.split('/');

  set(db, q, obj);

  const collectionRoot = verifyCollectionRoot(collectionName);

  for (let itemId of Object.keys(obj)) {
    const value = obj[itemId];
    const filePath = collectionRoot + '/' + itemId + '.json';
    fs.writeJsonSync(filePath, value, { spaces: 2 });
  }
};

export const initialRead = () => {
  const all = fs.readdirSync(dbRoot);
  const files = all.filter((f) => f.endsWith('.json'));
  const directories = all.filter((f) => !f.endsWith('.json'));

  for (let file of files) {
    const content = readJson(dbRoot + '/' + file);
    const key = file.replace('.json', '');
    db[key] = content;
  }

  for (let directory of directories) {
    db[directory] = readCollection(directory);
  }
};

// fs access

export const verifyCollectionRoot = (collectionName: string) => {
  if (!collectionName) return;

  const collectionRoot = dbRoot + '/' + collectionName;

  if (!fs.existsSync(collectionRoot)) {
    fs.mkdirSync(collectionRoot);
  }

  return collectionRoot;
};

export const readCollection = (nodeName: string) => {
  const collectionRoot = dbRoot + '/' + nodeName;
  const all = fs.readdirSync(collectionRoot);

  const output: any = {};

  all
    .filter((f) => f.endsWith('.json'))
    .forEach((f) => {
      const content = readJson(collectionRoot + '/' + f);
      const id = content.id ?? f.replace('.json', '');
      content.id = id;
      output[id] = content;
    });

  return output;
};

export const toObject = (arr: any[]) => {
  return arr.reduce((acc, curr) => {
    acc[curr.id] = curr;
    return acc;
  }, {});
};

export const readJson = (path: string) => {
  try {
    return fs.readJsonSync(path);
  } catch (err) {
    console.log(`Error reading file from ${path}`);
    return {};
  }
};
