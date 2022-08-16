import { actions } from './actions';
import { endpointsConfigOverrides } from './api';
import { initialState, reducers, clearState } from './initialState';
import { selectors } from './selectors.index';

export type { IUser, IUsers, IRefreshToken, IRefreshTokens } from './types';

export const auth = {
    initialState,
    actions,
    reducers,
    selectors,
    endpointsConfigOverrides,
    clearState,
    sagas: [],
    utils: {},
};
