import type { IStudioStore } from './types';
import { initialState } from './initialState';
import { generateActionsForStore } from 'redux-store-generator';

const generatedActions = generateActionsForStore<IStudioStore>(initialState);

export const actions = {
    ...generatedActions,
};
