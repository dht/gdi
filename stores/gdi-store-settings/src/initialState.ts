import { generateReducersForStore } from 'redux-store-generator';
import { actions } from './actions';
import { ISettingsStore } from './types';

export const initialState: ISettingsStore = {
    settings: {
        stateKey: 'settings',
    },
};

export const reducers = generateReducersForStore<ISettingsStore>(initialState);

export const clearState = (store: any) => {
    setTimeout(() => {
        // store.dispatch(actions.settings.setAll({}));
    });
    return store;
};
