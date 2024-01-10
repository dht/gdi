import { Json } from '@gdi/store-base';
import { getItem, patchItem } from '../utils/firebase';
import { getScopedPath } from './db._base';

export const getSettings = async (req: any) => {
  const scopedPath = getScopedPath(req, '', 'settings');
  return getItem(scopedPath);
};

export const patchSettings = (req: any, json: Json) => {
  const scopedPath = getScopedPath(req, '', 'settings');
  return patchItem(scopedPath, json);
};

export const all = {
  settings: {
    get: getSettings,
    patch: patchSettings,
  },
};
