import { AxiosRequestConfig } from 'axios';
import { Firestore } from 'firebase/firestore';
import { ApiVerb, NodeType } from 'redux-store-generator';

export type Json = Record<string, any>;

export type Action = {
  type: string;
  id?: string;
  payload?: Json;
};

export type StoreDefinition = {
  name: string;
  initialState: Json;
  reducers: any;
  middlewares: any;
  enhancers: any;
  sagas: any;
  sagasContext: any;
  enableDevtoolsExtension: boolean;
  sagaMonitor: any;
  adapter?: AdapterConfig;
  firebaseConfig?: Json;
  fireStore?: Firestore;
  useEmulator?: boolean;
  useLocalInstance?: boolean;
};

export type DataProvider =
  | 'none'
  | 'localStorage'
  | 'fireStore'
  | 'rest'
  | 'json'
  | 'jsonServer'
  | 'cli'
  | 'bridge'
  | 'direct'
  | 'functions';

export type HttpMethod = 'get' | 'post' | 'put' | 'delete' | 'patch';

export type AdapterConfig = {
  providerType: DataProvider;
  ignoreNodes: string[];
  scope?: string;
  localInstanceUrl?: string;
};

export type ActionInfo = {
  id: string;
  nodeName: string;
  verb: ApiVerb;
  nodeType: NodeType;
};

export type IApiRequest = {
  path: string;
  method?: HttpMethod;
  data?: Json | FormData;
  config?: AxiosRequestConfig;
};

export type ApiResponse<T> = {
  request: IApiRequest;
  status: number;
  statusText: string;
  data: T;
  isSuccess?: boolean;
  isError?: boolean;
  headers: Json;
  errorType?: ApiErrorType;
  errorMessage?: string;
  timestampStart: number;
  timestampEnd: number;
  duration: number;
};

export type ApiErrorType =
  | 'none'
  | 'timeout'
  | 'authorization'
  | 'server'
  | 'javascript';

// example store

export type ITodosStore = {
  _lastAction: Action;
};

export type ITodo = {
  id: string;
  title: string;
  completed: boolean;
};

export type ITodos = Record<string, ITodo>;

export type HandleMethod = (action: Action, info: ActionInfo) => Promise<any>;

export type IAction = {
  type: string;
  payload?: Json;
  id?: string;
};
