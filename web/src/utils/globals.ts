import { IDBAdapter, IFlowAdapter, IBoardAdapter } from '../adapters/adapter.types';

export let store: any;
export let flowAdapter: IFlowAdapter, boardAdapter: IBoardAdapter, dbAdapter: IDBAdapter;

export const setStore = (value: any) => {
  store = value;
};

export const getStore = () => {
  return store;
};

export const setFlowAdapter = (value: IFlowAdapter) => {
  flowAdapter = value;
};

export const getFlowAdapter = () => {
  return flowAdapter;
};

export const setBoardAdapter = (value: IBoardAdapter) => {
  boardAdapter = value;
};

export const getBoardAdapter = () => {
  return boardAdapter;
};
