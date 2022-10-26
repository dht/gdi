import { IEventsStore } from './types';
import { initialState } from './initialState';
import { generateActionsForStore } from 'redux-store-generator';

const generatedActions = generateActionsForStore<IEventsStore>(initialState);

export const actions = {
    ...generatedActions,
};
