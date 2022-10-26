import type { ISalesStore } from './types';
import { initialState } from './initialState';
import { generateActionsForStore } from 'redux-store-generator';

const generatedActions = generateActionsForStore<ISalesStore>(initialState);

export const actions = {
    ...generatedActions,
};
