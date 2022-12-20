import { devtools } from '@gdi/store-devtools';

export const actions = devtools.actions;

export const selectors = devtools.selectors;

export const reducers = devtools.reducers;

export const initialState = devtools.initialState;

export const endpointsConfig = (connectionType: ConnectionType) =>
    devtools.endpointsConfigOverrides(connectionType);

export const clearState = (store: any) => {
    devtools.clearState(store);
};
