import { initialState } from './initialState';
import { generateActionsForStore } from 'redux-store-generator';
import { ISiteStore } from './types';

const generatedActions = generateActionsForStore<ISiteStore>(initialState);

export const actions = {
    ...generatedActions,
};
