import { generateReducersForStore } from 'redux-store-generator';
import { IDevtoolsStore } from './types';

export const initialState: IDevtoolsStore = {
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
