import { initialState } from './initialState';
import { generateActionsForStore } from 'redux-store-generator';
import { IBusinessStore } from './types';

const generatedActions = generateActionsForStore<IBusinessStore>(initialState);

export const actions = {
    ...generatedActions,
};
