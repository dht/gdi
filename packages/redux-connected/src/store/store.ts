import {
  analyzeStructure,
  generateActionTypesDictionaryForStore,
  generateActionsForStore,
  generateReducersForStore,
} from 'redux-store-generator';
import { StoreBuilder } from '../builders/StoreBuilder';
import { midConnected } from '../middlewares/midConnected';
import { logMiddleware } from '../middlewares/midLog';
import { StoreDefinition } from '../types';
import { initFirestore, setFireStore } from '../utils/firestore';
import { lastActionReducer } from './reducers/lastAction';
import { setActions } from '../utils/actions';
import { get } from 'lodash';
import { initAxios } from '../providers/provider.rest';

export let config: any = {},
  meta: any = {
    actionTypes: {},
    structure: {},
  },
  sagaMiddleware: any;

export const initConnected = (
  definition: Partial<StoreDefinition>
): StoreBuilder => {
  config = definition;

  const {
    sagas,
    initialState,
    firebaseConfig,
    fireStore,
    useEmulator,
    useLocalInstance,
  } = definition;

  const storeBuilder = new StoreBuilder('gdi');

  const combinedState = {
    ...initialState,
  };

  const reducers = generateReducersForStore(combinedState);

  storeBuilder
    .withReducers(reducers)
    .withReducers({ _lastAction: lastActionReducer })
    .withMiddlewares([logMiddleware, midConnected])
    .withInitialState(combinedState)
    .withDevtoolsExtensions(true);

  if (sagas) {
    storeBuilder.withSagas(sagas);
  }

  sagaMiddleware = storeBuilder.getSagaMiddleware();

  meta.actionTypes = generateActionTypesDictionaryForStore<any>(combinedState);
  meta.structure = analyzeStructure(combinedState);

  const providerType = get(config, 'adapter.providerType', 'none');

  switch (providerType) {
    case 'fireStore':
      if (fireStore) {
        setFireStore(fireStore);
      } else if (firebaseConfig) {
        initFirestore(firebaseConfig, useEmulator);
      }
      break;
    case 'rest':
      const localInstanceUrl = get(config, 'adapter.localInstanceUrl', '');
      initAxios(localInstanceUrl + '/data');
      break;
  }

  const actions = generateActionsForStore<any>(initialState);
  setActions(actions);

  return storeBuilder;
};

export const runSaga = (saga: any) => {
  sagaMiddleware.run(saga);
};
