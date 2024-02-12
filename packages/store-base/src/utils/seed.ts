import { get } from 'lodash';
import { arrayToObject } from './object';
import { actions } from '../actions';
import { Json } from '../types';

export const seedDb = (db: Json) => {
  // @ts-ignore
  const store = window.store;

  if (!store) return;

  for (let nodeName of Object.keys(db)) {
    let value = db[nodeName];

    if (Array.isArray(value)) {
      value = arrayToObject(value);
    }

    const action = get(actions, [nodeName, 'setAll'], null);

    if (action) {
      store.dispatch(action(value));
    }
  }
};
