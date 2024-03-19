import { Json } from '@gdi/store-base';
import { getScopedPath } from './db._base';
import { dbAdapter } from '../utils/globals';

export const getDoc = (req: any, id: string) => {
  const scopedPath = getScopedPath(req, `/docs/${id}`, 'userData');
  return dbAdapter.getItem(scopedPath);
};

export const patchDoc = (req: any, id: string, json: Json) => {
  const scopedPath = getScopedPath(req, `/docs/${id}`, 'userData');
  return dbAdapter.patchItem(scopedPath, json);
};

export const all = {
  docs: {
    get: getDoc,
    patch: patchDoc,
  },
};
