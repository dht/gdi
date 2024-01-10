import { meta } from '../store/store';
import { Action } from '../types';

export const analyzeAction = (action: Action) => {
  const { type } = action;

  const actionInfo = meta.actionTypes[type];

  if (!actionInfo) {
    return null;
  }

  const { nodeName } = actionInfo;

  const noteType = meta.structure[nodeName];

  return {
    ...actionInfo,
    noteType,
  };
};
