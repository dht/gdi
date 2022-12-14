import type { IPplStore } from './types';
import { initialState } from './initialState';
import { generateActionsForStore } from 'redux-store-generator';

const generatedActions = generateActionsForStore<IPplStore>(initialState);

export const actions = {
    ...generatedActions,
};
