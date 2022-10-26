import { ITasksStore } from './types';
import { initialState } from './initialState';
import { generateActionsForStore } from 'redux-store-generator';

const generatedActions = generateActionsForStore<ITasksStore>(initialState);

export const actions = {
    ...generatedActions,
};
