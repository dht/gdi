import { settings as storeEntities } from '@gdi/store-settings';

export { actions, selectors } from '../selectors';
export const reducers = storeEntities.reducers;
export const initialState = storeEntities.initialState;
export const endpointsConfig = storeEntities.endpointsConfigOverrides;
export const clearState = storeEntities.clearState;
