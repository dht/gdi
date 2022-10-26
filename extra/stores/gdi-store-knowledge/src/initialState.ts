import { generateReducersForStore } from 'redux-store-generator';
import { IKnowledgeStore } from './types';

export const initialState: IKnowledgeStore = {
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
