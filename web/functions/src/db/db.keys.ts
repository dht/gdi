import { Json } from '@gdi/store-base';
import { decodeJson, encodeJson } from '../utils/crypto';
import { getItem, patchItem } from '../utils/firebase';
import { getScopedPath } from './db._base';

export const getKeys = async (req: any) => {
  const scopedPath = getScopedPath(req, '', 'keys');
  const data = await getItem(scopedPath);
  return decodeJson(data);
};

export const patchKeys = (req: any, json: Json) => {
  const scopedPath = getScopedPath(req, '', 'keys');
  const jsonEncoded = encodeJson(json);
  return patchItem(scopedPath, jsonEncoded);
};

export const all = {
  keys: {
    get: getKeys,
    patch: patchKeys,
  },
};
