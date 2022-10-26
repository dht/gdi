import { initialState } from './initialState';
import type { IMoneyStore } from './types';
import { generateActionsForStore } from 'redux-store-generator';

const generatedActions = generateActionsForStore<IMoneyStore>(initialState);

export const actions = {
    ...generatedActions,
};
