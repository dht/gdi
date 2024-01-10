import { generateActionsForStore } from 'redux-store-generator';
import { initialState } from './initialState';
import { IGdiStore } from './types';

export const actions = generateActionsForStore<IGdiStore>(initialState);
