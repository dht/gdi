import { actions } from './actions';
import { clearState, initialState, reducers } from './initialState';
import { endpointsConfigOverrides } from './api';
import { selectors } from './selectors.index';

export const weather = {
    actions,
    reducers,
    initialState,
    selectors,
    endpointsConfigOverrides,
    clearState,
};
