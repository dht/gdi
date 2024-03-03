import { dbAdapter } from '../utils/globals';
import { getScopedPath } from './db._base';

export const getCredits = (req: any) => {
  const scopedPath = getScopedPath(req, '', 'credits');
  return dbAdapter.getItem(scopedPath);
};

export const bootstrapCredits = async (req: any) => {
  const scopedPath = getScopedPath(req, '', 'credits');
  await dbAdapter.setItem(scopedPath, { value: 100 });
};

export const patchCredits = async (req: any, value: number) => {
  const scopedPath = getScopedPath(req, '', 'credits');
  await dbAdapter.patchItem(scopedPath, { value });
};

export const all = {
  credits: {
    bootstrap: bootstrapCredits,
    patch: patchCredits,
    get: getCredits,
  },
};
