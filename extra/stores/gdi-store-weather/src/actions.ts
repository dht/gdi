import { initialState } from './initialState';
import { generateActionsForStore } from 'redux-store-generator';
import { IWeatherStore } from './types';

const generatedActions = generateActionsForStore<IWeatherStore>(initialState);

export const actions = {
    ...generatedActions,
};
