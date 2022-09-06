import { initialState } from './initialState';
import { generateActionsForStore } from 'redux-store-generator';
import { IAuthStore } from './types';

const generatedActions = generateActionsForStore<IAuthStore>(initialState);

export const actions = {
    ...generatedActions,
};
