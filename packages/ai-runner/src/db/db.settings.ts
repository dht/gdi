import { Json } from '@gdi/store-base';
import { getScopedPath } from './db._base';
import { dbAdapter } from '../utils/globals';

export const patchUser = (req: any, json: Json) => {
  const scopedPath = getScopedPath(req, '', 'users');
  return dbAdapter.patchItem(scopedPath, json);
};

export const all = {
  user: {
    patch: patchUser,
  },
};
