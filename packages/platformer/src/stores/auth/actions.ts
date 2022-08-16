import { initialState, IAuthStore } from './initialState';
import { generateActionsForStore } from 'redux-store-generator';

const generatedActions = generateActionsForStore<IAuthStore>(initialState);

export const actions = {
    ...generatedActions,
};
