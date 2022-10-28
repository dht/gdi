import type { ICommentsStore } from './types';
import { initialState } from './initialState';
import { generateActionsForStore } from 'redux-store-generator';

const generatedActions = generateActionsForStore<ICommentsStore>(initialState);

export const actions = {
    ...generatedActions,
};
