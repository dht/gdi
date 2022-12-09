import { generateReducersForStore } from 'redux-store-generator';
import { IBibloStore } from './types';
import p from '../package.json';

export const initialState: IBibloStore = {
    meta: {
        version: p.version,
        isBeta: p.gdi.isBeta,
        isDraft: p.gdi.isDraft,
        description: p.description,
        packageType: p.gdi.packageType as GdiEntity,
    },
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
            tags: [],
            dataTags: [],
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
