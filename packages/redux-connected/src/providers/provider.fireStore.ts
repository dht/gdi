import { ApiVerb } from 'redux-store-generator';
import { Action, ActionInfo, HandleMethod } from '../types';
import { getActionForNode } from '../utils/actions';
import * as fire from '../utils/firestore';
import { scope } from '../utils/globals';
import { arrayToObject } from '../utils/object';

export const getScopedPath = (path: string) => {
  return `${scope}/${path}`;
};

export const getCollection = async (action: Action, info: ActionInfo) => {
  let nextAction,
    data = {};

  const { nodeName } = info;

  const xpath = getScopedPath(`${nodeName}`);

  const response = await fire.getCollection(xpath);

  if (response.isSuccess) {
    data = arrayToObject(response.data, 'id');
    nextAction = getActionForNode(nodeName, 'setAll', data);
  }

  return {
    data,
    nextAction,
    stopPropagation: !response.isError,
  };
};

export const patchCollectionItem = async (action: Action, info: ActionInfo) => {
  const { id, payload = {} } = action;
  const { nodeName } = info;

  const xpath = getScopedPath(`${nodeName}/${id}`);

  const response = await fire.updateCollectionItem(xpath, payload);

  if (response.isSuccess) {
  }

  return {
    stopPropagation: !response.isError,
  };
};

export const deleteCollectionItem = async (
  action: Action,
  info: ActionInfo
) => {
  const { id } = action;
  const { nodeName } = info;

  const xpath = getScopedPath(`${nodeName}/${id}`);
  const response = await fire.removeCollectionItem(xpath);

  if (response.isSuccess) {
  }

  return {
    data: null,
    stopPropagation: !response.isError,
  };
};

export const addCollectionItem = async (action: Action, info: ActionInfo) => {
  let nextAction;

  const { payload = {} } = action;
  const { nodeName } = info;

  const id = action.id ?? payload.id;

  const xpath = getScopedPath(`${nodeName}/${id}`);

  const response = await fire.setCollectionItem(xpath, payload);

  if (response.isSuccess) {
    nextAction = getActionForNode(nodeName, 'set', payload);
  }

  return {
    nextAction,
    stopPropagation: !response.isError,
  };
};

export const allVerbs: Record<ApiVerb, any> = {
  get: getCollection,
  patch: patchCollectionItem,
  delete: deleteCollectionItem,
  add: addCollectionItem,
  clear: null,
  clearItems: null,
  deleteItem: null,
  getItems: null,
  patchItem: null,
  pop: null,
  popItem: null,
  push: null,
  pushItem: null,
  pushMany: null,
  pushManyItems: null,
  set: null,
  setAll: null,
  setItems: null,
  setMany: null,
};

export const handleAction: HandleMethod = async (
  action: Action,
  info: ActionInfo
) => {
  const { verb } = info;

  const verbHandler = allVerbs[verb];

  if (!verbHandler) {
    return false;
  }

  const response = await verbHandler(action, info);
  const { nextAction, stopPropagation } = response;

  return {
    nextAction,
    stopPropagation,
  };
};
