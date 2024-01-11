import { selectors, actions } from '@gdi/store-iso';
import { get } from 'lodash';

export const diffToPatch = (diff: Json) => {
  const patch: Json = {};

  for (let key of Object.keys(diff)) {
    const value = diff[key];

    if (key.endsWith('__added') || key.endsWith('__deleted')) {
      continue;
    }

    if (Array.isArray(value)) {
      patch[key] = value;
    } else if (typeof value === 'object') {
      patch[key] = diffToPatch(value);
    } else {
      const { __new } = value;
      patch[key] = __new;
    }
  }

  return patch;
};

type NodeConfig = {
  nodeName: string;
};

export const generateActions = (diffCollection: Json, config: NodeConfig) => {
  const { nodeName } = config;
  let queue = [],
    action: any;

  for (let bitId of Object.keys(diffCollection)) {
    const actionType = keyToType(bitId);
    const actionCreator = get(actions, [nodeName, actionType], null);

    switch (actionType) {
      case 'add':
        action = actionCreator(diffCollection[bitId]);
        queue.push(action);
        break;
      case 'delete':
        action = actionCreator(bitId);
        queue.push(action);
        break;
      case 'patch':
        const change = diffToPatch(diffCollection[bitId]);
        action = actionCreator(bitId, change);
        queue.push(action);
        break;
    }
  }

  return queue;
};

export const keyToType = (key: string) => {
  if (key.endsWith('__added')) {
    return 'add';
  }

  if (key.endsWith('__deleted')) {
    return 'delete';
  }

  return 'patch';
};
