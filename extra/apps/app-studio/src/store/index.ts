import { dashboard } from '@gdi/store-dashboard';
import { studio } from '@gdi/store-studio';

export const actions = {
    ...dashboard.actions,
    ...studio.actions,
};

export const selectors = {
    raw: {
        ...dashboard.selectors.raw,
        ...studio.selectors.raw,
    },
    base: {
        ...dashboard.selectors.base,
        ...studio.selectors.base,
    },
    tables: {
        ...dashboard.selectors.tables,
    },
    options: {
        ...dashboard.selectors.options,
        ...studio.selectors.options,
    },
};

export const reducersDashboard = dashboard.reducers;
export const reducersStudio = studio.reducers;

export const initialStateDashboard = dashboard.initialState;
export const initialStateStudio = studio.initialState;

export const endpointsConfig = (connectionType: ConnectionType) => {
    return {
        ...dashboard.endpointsConfigOverrides(connectionType),
        ...studio.endpointsConfigOverrides(connectionType),
    };
};

export const clearState = () => {};
