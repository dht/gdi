import { composeWithDevTools } from '@redux-devtools/extension';
import {
  Middleware,
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { clearStore } from 'redux-store-generator';
import { Json, StoreDefinition } from '../types';

type HookCallback = (store: any) => void;

export class StoreBuilder implements IStoreBuilder {
  private definition: StoreDefinition = {
    name: '',
    initialState: {},
    reducers: {},
    middlewares: [],
    enhancers: [],
    sagas: [],
    sagasContext: {},
    enableDevtoolsExtension: false,
    sagaMonitor: null,
  };
  private preMiddlewares: any[] = [];
  private postMiddlewares: any[] = [];
  private sagaMiddleware: any;
  private preBuildHooks: HookCallback[] = [];
  private postBuildHooks: HookCallback[] = [];
  private autoClear: boolean = false;

  constructor(name: string) {
    this.definition.name = name;
  }

  withInitialState(initialState?: Json) {
    this.definition.initialState = {
      ...this.definition.initialState,
      ...initialState,
    };
    return this;
  }

  withPreBuildHook(callback: HookCallback) {
    this.preBuildHooks.push(callback);
    return this;
  }

  withPostBuildHook(callback: HookCallback) {
    this.postBuildHooks.push(callback);
    return this;
  }

  withReducers(reducers: any) {
    this.definition.reducers = {
      ...this.definition.reducers,
      ...reducers,
    };

    return this;
  }

  withMiddlewares(middlewares: Middleware | Middleware[]) {
    const extraMiddlewares = Array.isArray(middlewares)
      ? middlewares
      : [middlewares];

    this.definition.middlewares = [
      ...this.definition.middlewares,
      ...extraMiddlewares,
    ];

    return this;
  }

  withEnhancers(enhancers: any | any[]) {
    const extraEnhancers = Array.isArray(enhancers) ? enhancers : [enhancers];

    this.definition.enhancers = [
      ...this.definition.enhancers,
      ...extraEnhancers,
    ];

    return this;
  }

  withPreMiddlewares(...middlewares: any) {
    this.preMiddlewares = middlewares;
    return this;
  }

  withPostMiddlewares(...middlewares: any) {
    this.postMiddlewares = middlewares;
    return this;
  }

  withSagas(...sagas: any) {
    this.definition.sagas = [...this.definition.sagas, ...sagas];
    return this;
  }

  withSagaMonitor(sagaMonitor: any) {
    this.definition.sagaMonitor = sagaMonitor;
    return this;
  }

  withSagaContext(context: any) {
    this.definition.sagasContext = {
      ...this.definition.sagasContext,
      ...context,
    };
    return this;
  }

  clearSagas() {
    this.definition.sagas = [];
    return this;
  }

  withDevtoolsExtensions(enable?: boolean) {
    this.definition.enableDevtoolsExtension = enable === true;
    return this;
  }

  withAutoClear() {
    this.autoClear = true;
    return this;
  }

  getSagaMiddleware() {
    return this.sagaMiddleware;
  }

  clear(store: any) {
    clearStore(store);
  }

  build<T = any>(): T {
    // add the saga middleware

    this.preBuildHooks.forEach((callback: HookCallback) => {
      callback(store);
    });

    if (this.definition.sagas.length > 0) {
      this.sagaMiddleware = createSagaMiddleware({
        context: {
          ...this.definition.sagasContext,
        },
        sagaMonitor: this.definition.sagaMonitor,
      });
      this.withMiddlewares(this.sagaMiddleware);
    }

    const rootReducer = combineReducers(this.definition.reducers);

    const middlewareEnhancer = applyMiddleware(
      ...this.preMiddlewares,
      ...this.definition.middlewares,
      ...this.postMiddlewares
    );

    const composeMethod: any = this.definition.enableDevtoolsExtension
      ? composeWithDevTools
      : compose;

    const composedEnhancers = composeMethod(
      middlewareEnhancer,
      ...this.definition.enhancers
    );

    const store = createStore(
      rootReducer,
      this.definition.initialState,
      composedEnhancers
    ) as any;

    this.postBuildHooks.forEach((callback: HookCallback) => {
      callback(store);
    });

    // running sagas
    this.definition.sagas.forEach((saga: any) => {
      this.sagaMiddleware.run(saga);
    });

    if (this.autoClear) {
      this.clear(store);
    }

    return store;
  }
}

export interface IStoreBuilder {
  withInitialState: (initialState?: Json) => IStoreBuilder;
  withPreBuildHook: (callback: HookCallback) => IStoreBuilder;
  withPostBuildHook: (callback: HookCallback) => IStoreBuilder;
  withReducers: (reducers: any) => IStoreBuilder;
  withMiddlewares: (middlewares: Middleware | Middleware[]) => IStoreBuilder;
  withEnhancers: (enhancers: any | any[]) => IStoreBuilder;
  withPreMiddlewares: (...middlewares: any) => IStoreBuilder;
  withPostMiddlewares: (...middlewares: any) => IStoreBuilder;
  withSagas: (...sagas: any) => IStoreBuilder;
  withSagaMonitor: (sagaMonitor: any) => IStoreBuilder;
  withSagaContext: (context: any) => IStoreBuilder;
  withAutoClear: () => IStoreBuilder;
  clearSagas: () => IStoreBuilder;
  withDevtoolsExtensions: (enable?: boolean) => IStoreBuilder;
  build<T = any>(): T;
}
