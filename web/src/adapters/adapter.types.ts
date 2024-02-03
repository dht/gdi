import { IBoard } from '@gdi/store-base';
import type { Action, ActionInfo, HandleMethod } from 'redux-connected';
import { DataProvider } from 'redux-connected';
import { Json } from '../types';

export type IBoardAdapterConfig = {
  baseUrl: string;
};

export type IFlowAdapterConfig = {
  baseUrl: string;
};

export type IDBAdapterConfig = {
  providerType: DataProvider;
};

export interface IFlowAdapter {
  config: IFlowAdapterConfig;
  loadFlow: (flow: any) => void;
  start: (prompt: string, params: Json, meta: Json) => Promise<any>;
  setAssistant: (assistant: any) => Promise<any>;
}

export interface IBoardAdapter {
  config: IBoardAdapterConfig;
  loadBoard: (action: Json) => Promise<IBoard>;
  getBoard: () => IBoard;
  clearBoard: () => void;
}

export interface IDBAdapter {
  config: IDBAdapterConfig;
  handleAction: (action: Action, info: ActionInfo) => ReturnType<HandleMethod>;
}
