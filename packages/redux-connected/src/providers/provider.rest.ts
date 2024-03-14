import { ApiVerb } from 'redux-store-generator';
import { Action, ActionInfo, HandleMethod } from '../types';
import { getActionForNode } from '../utils/actions';
import { Axios } from '../utils/axios';
import { arrayToObject } from '../utils/object';
import { get } from 'lodash';
import { mergeCollection } from '../utils/collections';

let axios: Axios;

export const initAxios = (baseUrl: string) => {
  axios = new Axios(baseUrl);
};

export const getCollection = async (
  _action: Action,
  info: ActionInfo,
  allState: any
) => {
  let nextAction,
    data = {};

  const { nodeName, withMerge } = info;

  const xpath = `${nodeName}`;

  const response = await axios.run('get', xpath);

  if (response.isSuccess) {
    data = arrayToObject(response.data, 'id');

    if (withMerge) {
      data = mergeCollection(nodeName, data, allState);
    }

    nextAction = getActionForNode(nodeName, 'setAll', data);
  }

  return {
    data,
    nextAction,
    stopPropagation: !response.isError,
  };
};

export const patchCollectionItem = async (
  action: Action,
  info: ActionInfo,
  allState: any
) => {
  const { id, payload = {} } = action;
  const { nodeName } = info;

  const xpath = `${nodeName}/${id}`;

  const response = await axios.run('patch', xpath, payload);

  if (response.isSuccess) {
  }

  return {
    stopPropagation: !response.isError,
  };
};

export const deleteCollectionItem = async (
  action: Action,
  info: ActionInfo,
  allState: any
) => {
  const { id } = action;
  const { nodeName } = info;

  const xpath = `${nodeName}/${id}`;

  const response = await axios.run('delete', xpath);

  if (response.isSuccess) {
  }

  return {
    data: null,
    stopPropagation: !response.isError,
  };
};

export const addCollectionItem = async (
  action: Action,
  info: ActionInfo,
  allState: any
) => {
  let nextAction;

  const { payload = {} } = action;
  const { nodeName } = info;

  const id = action.id ?? payload.id;

  const xpath = `${nodeName}/${id}`;

  const response = await axios.run('post', xpath, payload);

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
  info: ActionInfo,
  allState: any
) => {
  const { verb } = info;

  const verbHandler = allVerbs[verb];

  if (!verbHandler) {
    return false;
  }

  const response = await verbHandler(action, info, allState);
  const { nextAction, stopPropagation } = response;

  return {
    nextAction,
    stopPropagation,
  };
};
