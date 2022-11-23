import { generateReducersForStore } from 'redux-store-generator';
import { actions } from './actions';
import { ISettingsStore } from './types';
import p from '../package.json';

export const initialState: ISettingsStore = {
    meta: {
        version: p.version,
        isBeta: p.gdi.isBeta,
        isDraft: p.gdi.isDraft,
        packageType: p.gdi.packageType as GdiEntity,
    },
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
