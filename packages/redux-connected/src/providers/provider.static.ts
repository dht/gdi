import { ApiVerb } from 'redux-store-generator';
import { Action, ActionInfo } from '../types';
import {
  deleteStoreXPath,
  getStoreXPath,
  patchStoreXPath,
} from '../utils/storage';
import { getActionForNode } from '../utils/actions';
import { HandleMethod } from '../types';
import { get } from 'lodash';
import { mergeCollection } from '../utils/collections';

export const getCollection = (
  _action: Action,
  info: ActionInfo,
  allState: any
) => {
  let nextAction,
    data = {};

  const { nodeName, withMerge } = info;

  const xpath = `${nodeName}`;
  data = getStoreXPath(xpath);

  if (withMerge) {
    data = mergeCollection(nodeName, data, allState);
  }

  nextAction = getActionForNode(nodeName, 'setAll', data);

  return {
    data,
    nextAction,
  };
};

export const patchCollectionItem = (
  action: Action,
  info: ActionInfo,
  allState: any
) => {
  const { id, payload = {} } = action;
  const { nodeName } = info;

  const xpath = `${nodeName}.${id}`;

  patchStoreXPath(xpath, payload);

  return {};
};

export const deleteCollectionItem = (
  action: Action,
  info: ActionInfo,
  allState: any
) => {
  const { id } = action;
  const { nodeName } = info;

  const xpath = `${nodeName}.${id}`;
  deleteStoreXPath(xpath);

  return {
    data: null,
  };
};

export const addCollectionItem = (
  action: Action,
  info: ActionInfo,
  allState: any
) => {
  const { payload = {} } = action;
  const { nodeName } = info;

  const id = action.id ?? payload.id;

  const xpath = `${nodeName}.${id}`;
  patchStoreXPath(xpath, payload);

  const nextAction = getActionForNode(nodeName, 'set', payload);

  return {
    nextAction,
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
  info: ActionInfo,
  allState: any
) => {
  const { verb } = info;

  const verbHandler = allVerbs[verb];

  if (!verbHandler) {
    return false;
  }

  const response = await verbHandler(action, info, allState);
  const { nextAction } = response;

  return {
    nextAction,
    stopPropagation: false,
  };
};
