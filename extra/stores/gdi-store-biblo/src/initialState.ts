import { generateReducersForStore } from 'redux-store-generator';
import { IBibloStore } from './types';

export const initialState: IBibloStore = {
    appStateBiblo: {
        stateKey: 'biblo',
        currentNodeId: 'interestingReads',
    },
    interestingReads: {
        '1': {
            id: '1',
            name: '',
            url: '',
            category: '',
            description: '',
            revisitDate: '2022-10-10',
            revisitMood: '',
        },
    },
    readCategories: {
        '1': {
            id: '1',
            name: '',
        },
    },
};

export const reducers = generateReducersForStore<IBibloStore>(initialState);

export const clearState = (store: any) => {
    return store;
};
