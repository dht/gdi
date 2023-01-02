import { generateReducersForStore } from 'redux-store-generator';
import { IGuidanceStore } from './types';
import p from '../../package.json';
import { actions } from './actions';

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
        serviceStatus: 'INITIAL',
    },
    bmsFeatures: {
        '1': {
            id: '1',
            name: '',
            parentId: '',
        },
    },
    businessDomains: {
        '1': {
            id: '1',
            name: '',
            parentId: '',
        },
    },
    rankings: {
        '1': {
            id: '1',
            domainId: '1',
            rank: 100,
        },
    },
    requirements: {
        '1': {
            id: '1',
            bmsFeatureId: '',
            isRequired: true,
            strength: 1,
        },
    },
};

export const reducers = generateReducersForStore<IGuidanceStore>(initialState);

export const clearState = (store: any) => {
    setTimeout(() => {
        store.dispatch(actions.bmsFeatures.setAll({}));
        store.dispatch(actions.businessDomains.setAll({}));
        store.dispatch(actions.rankings.setAll({}));
        store.dispatch(actions.requirements.setAll({}));
    });
    return store;
};
