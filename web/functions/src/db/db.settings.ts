import { Json } from '@gdi/store-base';
import { getItem, patchItem } from '../utils/firebase';
import { getScopedPath } from './db._base';

export const patchUser = (req: any, json: Json) => {
  const scopedPath = getScopedPath(req, '', 'users');
  return patchItem(scopedPath, json);
};

export const all = {
  user: {
    patch: patchUser,
  },
};
