import { IGuidanceStore } from './types';
import { initialState } from './initialState';
import { generateActionsForStore } from 'redux-store-generator';

const generatedActions = generateActionsForStore<IGuidanceStore>(initialState);

export const actions = {
    ...generatedActions,
};
