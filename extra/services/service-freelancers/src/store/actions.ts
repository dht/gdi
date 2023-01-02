import { IFreelancerStore } from './types';
import { initialState } from './initialState';
import { generateActionsForStore } from 'redux-store-generator';

const generatedActions =
    generateActionsForStore<IFreelancerStore>(initialState);

export const actions = {
    ...generatedActions,
};
