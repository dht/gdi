import { mixer } from '@gdi/store-mixer';
import { site } from '@gdi/store-site';

export const actions = {
    ...site.actions,
    ...mixer.actions,
};

export const selectors = {
    raw: {
        ...mixer.selectors.raw,
        ...site.selectors.raw,
    },
    base: {
        ...mixer.selectors.base,
        ...site.selectors.base,
    },
    forms: {
        ...mixer.selectors.forms,
    },
    tables: {
        ...site.selectors.tables,
        ...mixer.selectors.tables,
    },
    options: {
        ...mixer.selectors.options,
        ...site.selectors.options,
    },
};

export const reducers = mixer.reducers;
export const reducersSite = site.reducers;

export const initialState = mixer.initialState;
export const initialStateSite = site.initialState;

export const endpointsConfig = {
    ...mixer.endpointsConfigOverrides,
    ...site.endpointsConfigOverrides,
};

export const clearState = (store: any) => {
    mixer.clearState(store);
    site.clearState(store);
};
