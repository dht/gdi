import { business } from '@gdi/store-business';
import { settings } from '@gdi/store-settings';
import { auth } from '@gdi/store-auth';
import { site } from '@gdi/store-site';

export { selectors } from '../selectors';

export const actions = {
    ...auth.actions,
    ...business.actions,
    ...site.actions,
    ...settings.actions,
};

export const reducers = settings.reducers;
export const reducersBusiness = business.reducers;
export const reducersSite = site.reducers;
export const reducersAuth = auth.reducers;

export const initialState = settings.initialState;
export const initialStateBusiness = business.initialState;
export const initialStateSite = site.initialState;

export const endpointsConfig = (connectionType: ConnectionType) => {
    return {
        ...business.endpointsConfigOverrides(connectionType),
        ...settings.endpointsConfigOverrides(connectionType),
    };
};

export const clearState = (store: any) => {
    business.clearState(store);
    settings.clearState(store);
};
