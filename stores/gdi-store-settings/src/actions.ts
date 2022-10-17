import { initialState } from './initialState';
import { generateActionsForStore } from 'redux-store-generator';
import { ISettingsStore } from './types';

const generatedActions = generateActionsForStore<ISettingsStore>(initialState);

export const actions = {
    ...generatedActions,
};
