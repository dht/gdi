import { IThingsStore } from './types';
import { initialState } from './initialState';
import { generateActionsForStore } from 'redux-store-generator';

const generatedActions = generateActionsForStore<IThingsStore>(initialState);

export const actions = {
    ...generatedActions,
};
