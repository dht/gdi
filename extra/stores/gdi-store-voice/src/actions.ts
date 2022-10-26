import { IVoiceStore } from './types';
import { initialState } from './initialState';
import { generateActionsForStore } from 'redux-store-generator';

const generatedActions = generateActionsForStore<IVoiceStore>(initialState);

export const actions = {
    ...generatedActions,
};
