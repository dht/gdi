import { ILevelUpStore } from './types';
import { initialState } from './initialState';
import { generateActionsForStore } from 'redux-store-generator';

const generatedActions = generateActionsForStore<ILevelUpStore>(initialState);

export const actions = {
    ...generatedActions,
};
