import fs from 'fs-extra';
import { get, set, merge } from 'lodash';
import { unScopePath } from '../utils/xpath';
import { db } from './fileDb.global';
import { socketsAdapter } from '../utils/globals';
import kleur from 'kleur';

export let dbRoot = '';

export const initDb = (projectRoot: string, dbPath: string) => {
  const rootPath = projectRoot + dbPath;
  console.log(`Initializing fileDb at ${kleur.magenta(dbPath)}`);
  dbRoot = rootPath;
  initialRead();
};

export const patchSingle = (path: string, change: Json) => {
  const currentData = get(db, path);
  const newData = merge(currentData, change);

  set(db, path, newData);

  const filePath = dbRoot + '/' + path + '.json';
  fs.writeJsonSync(filePath, newData, { spaces: 2 });
};

export const addItem = (path: string, item: Json) => {
  const q = path.split('/');

  set(db, q, item);

  const filePath = dbRoot + '/' + path + '.json';
  fs.writeJsonSync(filePath, item, { spaces: 2 });
};

export const patchItem = (path: string, change: Json, withMerge: boolean) => {
  const q = path.split('/');
  const collectionName = q[0];
  const currentData = get(db, q, {});

  const newData = withMerge ? merge(currentData, change) : { ...currentData, ...change };
  verifyCollectionRoot(collectionName);

  set(db, q, newData);

  socketsAdapter.invokeListeners(path, newData);

  const filePath = dbRoot + '/' + path + '.json';
  fs.writeJsonSync(filePath, newData, { spaces: 2 });
};

export const setItem = (path: string, data: Json) => {
  const q = path.split('/');
  const collectionName = q[0];

  verifyCollectionRoot(collectionName);

  set(db, q, data);

  const filePath = dbRoot + '/' + path + '.json';

  fs.writeJsonSync(filePath, data, { spaces: 2 });
};

export const deleteItem = (path: string) => {
  const q = path.split('/');

  set(db, q, undefined);

  const filePath = dbRoot + '/' + path + '.json';
  fs.unlinkSync(filePath);
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

export const replaceCollection = async (path: string, obj: any) => {
  const q = path.split('/');
  const collectionName = q[0];

  set(db, q, obj);

  const collectionRoot = verifyCollectionRoot(collectionName);

  for (let itemId of Object.keys(obj)) {
    const value = obj[itemId];
    const filePath = collectionRoot + '/' + itemId + '.json';
    fs.writeJsonSync(filePath, value, { spaces: 2 });
  }
};

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

export const readJson = (path: string) => {
  try {
    return fs.readJsonSync(path);
  } catch (err) {
    console.log(`Error reading file from ${path}`);
    return {};
  }
};

export const getSingle = (path: string) => {
  return get(db, path);
};

export const getAll = (path: string) => {
  const data = get(db, path);
  return Object.values(data ?? {}).filter((i) => i) as Json[];
};

export const getItem = (path: string) => {
  const q = path.split('/');
  return get(db, q);
};

export const all = {
  single: {
    get: getSingle,
    patch: patchSingle,
  },
  collection: {
    getAll,
    addItem,
    patchItem,
    setItem,
    deleteItem,
    replaceCollection,
    getItem,
  },
};
