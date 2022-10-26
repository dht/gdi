import { initialState } from './initialState';
import { generateActionsForStore } from 'redux-store-generator';
import { ISoundboardStore } from './types';

const generatedActions =
    generateActionsForStore<ISoundboardStore>(initialState);

export const actions = {
    ...generatedActions,
};
