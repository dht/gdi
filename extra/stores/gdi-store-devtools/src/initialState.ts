import { generateReducersForStore } from 'redux-store-generator';
import { IDevtoolsStore } from './types';
import p from '../package.json';

export const initialState: IDevtoolsStore = {
    meta: {
        version: p.version,
        description: p.description,
        isBeta: p.gdi.isBeta,
        isDraft: p.gdi.isDraft,
        packageType: p.gdi.packageType as GdiEntity,
    },
    appStateDevtools: {
        stateKey: 'devtools',
        currentNodeId: 'article',
        isOn: true,
    },
};

export const reducers = generateReducersForStore<IDevtoolsStore>(initialState);

export const clearState = (store: any) => {
    setTimeout(() => {});
    return store;
};
