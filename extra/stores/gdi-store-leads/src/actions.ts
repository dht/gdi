import type { ILeadsStore } from './types';
import { initialState } from './initialState';
import { generateActionsForStore } from 'redux-store-generator';

const generatedActions = generateActionsForStore<ILeadsStore>(initialState);

export const actions = {
    ...generatedActions,
};
