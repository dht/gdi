import { IKnowledgeStore } from './types';
import { initialState } from './initialState';
import { generateActionsForStore } from 'redux-store-generator';

const generatedActions = generateActionsForStore<IKnowledgeStore>(initialState);

export const actions = {
    ...generatedActions,
};
