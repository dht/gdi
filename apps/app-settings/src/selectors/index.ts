import { settings } from '@gdi/store-settings';
import { auth } from '@gdi/store-auth';
import { site } from '@gdi/store-site';

export const actions = {
    ...auth.actions,
    ...site.actions,
    ...settings.actions,
};

export const selectors = {
    raw: {
        ...auth.selectors.raw,
        ...site.selectors.raw,
        ...settings.selectors.raw,
    },
    base: {
        ...auth.selectors.base,
        ...site.selectors.base,
        ...settings.selectors.base,
    },
};

export const reducers = settings.reducers;
export const reducersSite = site.reducers;
export const reducersAuth = auth.reducers;

export const initialState = settings.initialState;
export const initialStateSite = site.initialState;

export const endpointsConfig = (connectionType: ConnectionType) =>
    settings.endpointsConfigOverrides(connectionType);

export const clearState = (store: any) => {
    settings.clearState(store);
};
