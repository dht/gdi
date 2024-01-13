import { unScopePath } from '../utils/xpath';
import { all } from './fileDb.fs';

export const getCollection = async (xpath: string) => {
  const pathInfo = unScopePath(xpath);
  const { path } = pathInfo;

  return all.collection.getAll(path);
};

export const deleteItem = async (xpath: string) => {
  const pathInfo = unScopePath(xpath);
  const { path } = pathInfo;

  return all.collection.deleteItem(path);
};

export const getItem = async (xpath: string) => {
  const pathInfo = unScopePath(xpath);
  const { path } = pathInfo;

  return all.collection.getItem(path);
};

export const setItem = async (xpath: string, data: any) => {
  const pathInfo = unScopePath(xpath);
  const { path } = pathInfo;

  all.collection.setItem(path, data);
};

export const patchItem = async (xpath: string, change: any, withMerge: boolean) => {
  const pathInfo = unScopePath(xpath);
  const { path } = pathInfo;

  const parts = path.split('/');

  if (parts.length === 1) {
    all.single.patch(path, change);
  } else {
    all.collection.patchItem(path, change, true);
  }
};

export const replaceCollection = async (xpath: string, obj: any) => {
  const pathInfo = unScopePath(xpath);
  const { path } = pathInfo;

  return all.collection.replaceCollection(path, obj);
};
