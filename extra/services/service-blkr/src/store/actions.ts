import { IBlkrStore } from './types';
import { initialState } from './initialState';
import { generateActionsForStore } from 'redux-store-generator';

const generatedActions = generateActionsForStore<IBlkrStore>(initialState);

export const actions = {
    ...generatedActions,
};
