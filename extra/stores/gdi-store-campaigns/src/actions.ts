import type { ICampaignsStore } from './types';
import { initialState } from './initialState';
import { generateActionsForStore } from 'redux-store-generator';

const generatedActions = generateActionsForStore<ICampaignsStore>(initialState);

export const actions = {
    ...generatedActions,
};
