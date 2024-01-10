import { Json } from '../../types';
import * as path from 'path';
import { get, set } from 'lodash';

const statePath = path.resolve(__dirname, '../../_playground/data/state.json');

let state: Json = {} as Json;

export const saveState = () => {};

export const patchState = (xpath: string, value: any) => {
  set(state, xpath, value);
  saveState();
};

export const mergeState = (xpath: string, value: Json) => {
  Object.keys(value).forEach((key) => {
    const xpathKey = `${xpath}.${key}`;
    const valueKey = value[key];
    patchState(xpathKey, valueKey);
  });
};

export const getState = (xpath: string) => {
  return get(state, xpath);
};
