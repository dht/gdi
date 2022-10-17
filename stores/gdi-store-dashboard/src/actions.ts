import { initialState } from './initialState';
import { generateActionsForStore } from 'redux-store-generator';
import { IDashboardStore } from './types';

const generatedActions = generateActionsForStore<IDashboardStore>(initialState);

export const actions = {
    ...generatedActions,
};
