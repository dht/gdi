import { getProvider } from '../providers';
import { config } from '../store/store';
import { Action } from '../types';
import { analyzeAction } from '../utils/connected';
import { get } from 'lodash';

const optimistic: any = {
  add: true,
  patch: true,
  delete: true,
};

export const midConnected =
  (store: any) => (next: any) => async (action: Action) => {
    const info = analyzeAction(action);

    // action not connected
    if (!info) {
      return next(action);
    }

    const { verb, isLocal, nodeName } = info;

    const isOptimistic =
      get(config, 'adapter.optimisticNodes', []).includes(nodeName) ||
      get(config, 'adapter.optimisticVerbs', []).includes(verb);

    // const isOptimistic = optimistic[verb];
    const provider = getProvider();

    const shouldIgnore = get(config, 'adapter.ignoreNodes', []).includes(
      nodeName
    );

    if (isLocal || !provider || shouldIgnore) {
      return next(action);
    }

    if (isOptimistic) {
      next(action);

      if (verb === 'add') {
        store.dispatch(addToSet(action));
      }
    }

    const response = await provider(action, info);

    const { nextAction } = response;

    if (nextAction) {
      store.dispatch(nextAction);
    }

    if (!isOptimistic) {
      return next(action);
    }
  };

export const addToSet = (action: any) => {
  const id = get(action, 'payload.id', '');
  const output = { id, ...action };
  output.type = output.type.replace('ADD_', 'SET_');
  return output;
};
