import { generateActionsForStore } from 'redux-store-generator';
import { initialState } from './initialState.iso';
import { IIsoStore } from './types.iso';

export const actions = generateActionsForStore<IIsoStore>(initialState);
