import type { IOrdersStore } from './types';
import { initialState } from './initialState';
import { generateActionsForStore } from 'redux-store-generator';

const generatedActions = generateActionsForStore<IOrdersStore>(initialState);

export const actions = {
    ...generatedActions,
};
