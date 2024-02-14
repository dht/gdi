import { Json } from '@gdi/store-base';
import { getScopedPath } from './db._base';
import { dbAdapter } from '../utils/globals';

export const reportNewIssue = (req: any, json: Json) => {
  const scopedPath = getScopedPath(req, `/issues/${json.id}`, 'global');

  json.uid = req.user.uid;
  json.displayName = req.user.displayName;

  return dbAdapter.patchItem(scopedPath, json);
};

export const all = {
  issues: {
    create: reportNewIssue,
  },
};
