import { soundboard as storeEntities } from '@gdi/store-soundboard';
import { tasks } from '@gdi/store-tasks';

export const actionsTasks = tasks.actions;
export const actions = storeEntities.actions;
export const selectors = storeEntities.selectors;
export const selectorsTasks = tasks.selectors;
export const reducers = storeEntities.reducers;
export const initialState = storeEntities.initialState;
export const endpointsConfig = storeEntities.endpointsConfigOverrides;
export const clearState = storeEntities.clearState;
