import { get, set, remove } from 'lodash';

export const getString = (key: string) => {
  return localStorage.getItem(key);
};

export const setString = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

export const removeString = (key: string) => {
  localStorage.removeItem(key);
};

export const getJson = (key: string) => {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
};

export const setJson = (key: string, value: any) => {
  const valueToStore = JSON.stringify(value);
  setString(key, valueToStore);
};

export const patchJson = (key: string, value: any) => {
  const valueToStore = JSON.stringify({ ...getJson(key), ...value });
  setString(key, valueToStore);
};

export const getStore = () => {
  return getJson('STORE') || {};
};

export const setStore = (value: Json) => {
  setJson('STORE', value);
};

export const getStoreXPath = (xpath: string) => {
  const store = getStore();
  return get(store, xpath);
};

export const patchStoreXPath = (xpath: string, change: Json) => {
  const store = getStore();
  const value = get(store, xpath);

  set(store, xpath, {
    ...value,
    ...change,
  });

  setStore(store);
};

export const deleteStoreXPath = (xpath: string) => {
  const store = getStore();
  const parts = xpath.split('.');
  const last = parts.pop();
  const xpathWithoutLast = parts.join('.');
  const value = get(store, xpathWithoutLast);

  if (!last || !(last in value)) {
    return;
  }

  delete value[last];
  set(store, xpathWithoutLast, value);
  setStore(store);
};
