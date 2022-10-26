import { initialState } from './initialState';
import { generateActionsForStore } from 'redux-store-generator';
import { IDevtoolsStore } from './types';

const generatedActions = generateActionsForStore<IDevtoolsStore>(initialState);

export const actions = {
    ...generatedActions,
};
