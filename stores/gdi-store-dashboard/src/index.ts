import { actions } from './actions';
import { clearState, initialState, reducers } from './initialState';
import { endpointsConfigOverrides } from './api';
import { selectors } from './selectors.index';

export const dashboard = {
    initialState,
    actions,
    reducers,
    selectors,
    endpointsConfigOverrides,
    clearState,
};

export * from './types';
