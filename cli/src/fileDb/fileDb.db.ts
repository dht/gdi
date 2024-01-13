import { Json } from '../types';
import fs from 'fs-extra';
import { get, set, toArray } from 'lodash';
import { unScopePath } from '@gdi/ai-runner';
import { socketsAdapter } from '../utils/globals';

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
  return Object.values(data ?? {});
};

export const deleteItem = async (xpath: string) => {
  const pathInfo = unScopePath(xpath);

  console.log('deleteItem xpath ->', pathInfo);
};

export const getItem = async (xpath: string) => {
  const pathInfo = unScopePath(xpath);
  const { path, isUserData, collectionName } = pathInfo;

  if (!isUserData) {
    return get(db, path);
  }
  console.log('getItem xpath ->', pathInfo);

  return {};
};

export const setItem = async (xpath: string, item: any) => {
  const pathInfo = unScopePath(xpath);
  const { path, isUserData, collectionName } = pathInfo;

  if (!isUserData) {
    console.log('setItem path! ->', path);
    return;
  }

  const q = path.replace(/\//g, '.');
  set(db, q, item);

  verifyCollectionRoot(collectionName);

  const filePath = dbRoot + '/' + path + '.json';
  fs.writeJsonSync(filePath, item, { spaces: 2 });
};

export const patchItem = async (xpath: string, change: any) => {
  const pathInfo = unScopePath(xpath);
  const { path, collectionName } = pathInfo;

  const currentData = db[path] ?? {};

  const newData = { ...currentData, ...change };

  verifyCollectionRoot(collectionName);

  socketsAdapter.invokeListeners(xpath, newData);

  db[path] = newData;
  fs.writeJsonSync(dbRoot + '/' + path + '.json', newData, { spaces: 2 });
};

export const replaceCollection = async (xpath: string, obj: any) => {
  const pathInfo = unScopePath(xpath);
  const { path, collectionName } = pathInfo;

  set(db, path, obj);

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

  const files = all
    .filter((f) => f.endsWith('.json'))
    .map((file) => {
      const content = readJson(collectionRoot + '/' + file);
      return content;
    });

  return toObject(files);
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
