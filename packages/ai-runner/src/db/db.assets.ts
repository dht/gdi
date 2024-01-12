import { guid4 } from 'shared-base';
import { IAsset } from '../types';
import { getScopedPath } from './db._base';
import { dbAdapter } from '../utils/globals';

export const createAsset = async (req: any, asset: IAsset) => {
  const { id } = asset;
  const scopedPath = getScopedPath(req, `/myAssets/${id}`, 'userData');
  await dbAdapter.patchItem(scopedPath, asset);
  return asset;
};

export const getAssets = async (req: any) => {
  const scopedPath = getScopedPath(req, '/myAssets', 'userData');
  return dbAdapter.getCollection(scopedPath);
};

export const patchAsset = async (req: any, id: string, asset: Partial<IAsset>) => {
  const scopedPath = getScopedPath(req, `/myAssets/${id}`, 'userData');
  await dbAdapter.patchItem(scopedPath, asset);
  return asset;
};

export const getAsset = async (req: any, id: string) => {
  const scopedPath = getScopedPath(req, `/myAssets/${id}`, 'userData');
  const response = await dbAdapter.getItem(scopedPath);
  return response;
};

export const setAsset = async (req: any, id: string, asset: Partial<IAsset>) => {
  const scopedPath = getScopedPath(req, `/myAssets/${id}`, 'userData');
  await dbAdapter.setItem(scopedPath, asset);
  return asset;
};

export const deleteAsset = async (req: any, id: string) => {
  const scopedPath = getScopedPath(req, `/myAssets/${id}`, 'userData');
  await dbAdapter.deleteItem(scopedPath);
};

export const logNewAsset = async (req: any, assetUrl: string, contentType: string = '') => {
  const id = guid4();
  const scopedPath = getScopedPath(req, `/assets/${id}`, 'userData');

  return dbAdapter.patchItem(scopedPath, {
    id,
    assetUrl,
    contentType,
    tsAdded: Date.now(),
  });
};

export const all = {
  assets: {
    create: createAsset,
    getAll: getAssets,
    patch: patchAsset,
    get: getAsset,
    set: setAsset,
    logNew: logNewAsset,
    delete: deleteAsset,
  },
};
