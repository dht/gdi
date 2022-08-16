import { initialState } from './initialState';
import { generateActionsForStore } from 'redux-store-generator';
import { IMixerStore } from './types';

const generatedActions = generateActionsForStore<IMixerStore>(initialState);

export const actions = {
    ...generatedActions,
};
