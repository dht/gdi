import type { ICartsStore } from './types';
import { initialState } from './initialState';
import { generateActionsForStore } from 'redux-store-generator';

const generatedActions = generateActionsForStore<ICartsStore>(initialState);

export const actions = {
    ...generatedActions,
};
