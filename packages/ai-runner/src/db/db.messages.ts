import { Json } from '@gdi/store-base';
import { cleanUndefined } from '../utils/object';
import { getScopedPath } from './db._base';
import { dbAdapter } from '../utils/globals';

export const adhocMessage = (req: any, change: Json) => {
  // console.log('change ->', change);
  const scopedPath = getScopedPath(req, '/messages/default', 'userData');
  return dbAdapter.patchItem(scopedPath, change);
};

export const all = {
  messages: {
    adhoc: adhocMessage,
  },
};
