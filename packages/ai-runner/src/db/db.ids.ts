import { Json } from '@gdi/store-base';
import { getScopedPath } from './db._base';
import { dbAdapter } from '../utils/globals';

export const getIds = async (req: any) => {
  const scopedPath = getScopedPath(req, '/ids/default', 'userData');
  return dbAdapter.getItem(scopedPath);
};

export const patchIds = (req: any, json: Json) => {
  const scopedPath = getScopedPath(req, '/ids/default', 'userData');
  return dbAdapter.patchItem(scopedPath, json);
};

export const all = {
  ids: {
    get: getIds,
    patch: patchIds,
  },
};
