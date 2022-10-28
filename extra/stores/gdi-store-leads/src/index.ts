import { actions } from './actions';
import { clearState, initialState, reducers } from './initialState';
import { endpointsConfigOverrides } from './api';
import { selectors } from './selectors.index';

export const leads = {
    initialState,
    actions,
    reducers,
    selectors,
    endpointsConfigOverrides,
    clearState,
};
