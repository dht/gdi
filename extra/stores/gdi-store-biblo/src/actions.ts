import { IBibloStore } from './types';
import { initialState } from './initialState';
import { generateActionsForStore } from 'redux-store-generator';

const generatedActions = generateActionsForStore<IBibloStore>(initialState);

export const actions = {
    ...generatedActions,
};
