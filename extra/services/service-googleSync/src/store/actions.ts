import { IGoogleSyncStore } from './types';
import { initialState } from './initialState';
import { generateActionsForStore } from 'redux-store-generator';

const generatedActions =
    generateActionsForStore<IGoogleSyncStore>(initialState);

export const actions = {
    ...generatedActions,
};
