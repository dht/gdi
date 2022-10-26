import type { IProductsStore } from './types';
import { initialState } from './initialState';
import { generateActionsForStore } from 'redux-store-generator';

const generatedActions = generateActionsForStore<IProductsStore>(initialState);

export const actions = {
    ...generatedActions,
};
