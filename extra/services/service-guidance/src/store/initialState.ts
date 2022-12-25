import { generateReducersForStore } from 'redux-store-generator';
import { IGuidanceStore } from './types';
import p from '../../package.json';

export const initialState: IGuidanceStore = {
    meta: {
        version: p.version,
        isBeta: p.gdi.isBeta,
        isDraft: p.gdi.isDraft,
        description: p.description,
        packageType: p.gdi.packageType as GdiEntity,
    },
    appStateGuidance: {
        stateKey: 'guidance',
        currentDomainId: '',
        currentFeatureId: '',
    },
    requiredDomains: {
        '1': {
            id: '1',
            name: '',
            parentId: '',
        },
    },
    rankedDomains: {
        '1': {
            id: '1',
            name: '',
            parentId: '',
            rank: 100,
        },
    },
    requiredFeatures: {
        '1': {
            id: '1',
            name: '',
            parentId: '',
        },
    },
};

export const reducers = generateReducersForStore<IGuidanceStore>(initialState);

export const clearState = (store: any) => {
    return store;
};
