import { initConnected } from 'redux-connected';
import { initialState } from './initialState';
import { Json } from './types';

export let store: any;

export const initStore = (root: any, firebase?: Json, dbAdapter?: Json, useEmulator?: boolean) => {
  const { firebaseConfig, fireStore } = firebase || {};

  const storeBuilder = initConnected({
    initialState,
    sagas: root,
    adapter: {
      providerType: 'none',
      ignoreNodes: [],
      scope: '',
      ...dbAdapter,
    },
    firebaseConfig,
    fireStore,
    useEmulator,
  });

  // storeBuilder.withAutoClear();

  return storeBuilder;
};
