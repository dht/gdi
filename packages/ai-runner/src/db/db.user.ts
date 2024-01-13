import { Json } from '@gdi/store-base';
import { getScopedPath } from './db._base';
import { dbAdapter } from '../utils/globals';

export const getSettings = async (req: any) => {
  const scopedPath = getScopedPath(req, '', 'settings');
  return dbAdapter.getItem(scopedPath);
};

export const patchSettings = (req: any, json: Json) => {
  const scopedPath = getScopedPath(req, '', 'settings');
  return dbAdapter.patchItem(scopedPath, json);
};

export const all = {
  settings: {
    get: getSettings,
    patch: patchSettings,
  },
};
