import { initialState } from './initialState';
import { generateActionsForStore } from 'redux-store-generator';
import { IFactoryStore } from './types';

const generatedActions = generateActionsForStore<IFactoryStore>(initialState);

export const actions = {
    ...generatedActions,
};
