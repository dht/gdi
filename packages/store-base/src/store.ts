import { initConnected } from 'redux-connected';
import { initialState } from './initialState';
import { Json } from './types';

export const initStore = (
  root: any,
  firebase?: Json,
  dbAdapter?: Json,
  useEmulator?: boolean,
  useLocalInstance?: boolean
) => {
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
    useLocalInstance,
  });

  storeBuilder.withAutoClear(['multis']);

  return storeBuilder;
};
