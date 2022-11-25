import { generateReducersForStore } from 'redux-store-generator';
import { IKnowledgeStore } from './types';
import p from '../package.json';

export const initialState: IKnowledgeStore = {
    meta: {
        version: p.version,
        description: p.description,
        isBeta: p.gdi.isBeta,
        isDraft: p.gdi.isDraft,
        packageType: p.gdi.packageType as GdiEntity,
    },
    appStateKnowledge: {
        stateKey: 'knowledge',
        currentNodeId: 'links',
    },
    linkCategories: {
        '1': {
            id: '1',
            name: '',
        },
    },
    links: {
        '1': {
            id: '1',
            url: '',
            category: '',
            description: '',
            revisitDate: '2022-10-10',
        },
    },
};

export const reducers = generateReducersForStore<IKnowledgeStore>(initialState);

export const clearState = (store: any) => {
    return store;
};
