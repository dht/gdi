import { generateReducersForStore } from 'redux-store-generator';
import { IThingsStore } from './types';
import p from '../package.json';

export const initialState: IThingsStore = {
    meta: {
        version: p.version,
        description: p.description,
        isBeta: p.gdi.isBeta,
        isDraft: p.gdi.isDraft,
        packageType: p.gdi.packageType as GdiEntity,
    },
    appStateThings: {
        stateKey: 'things',
        currentMood: '',
        currentNodeId: 'things',
    },
    things: {
        '1': {
            id: '1',
            title: 'Good stuff',
            description: 'nice stuff',
            imageUrl: `https://picsum.photos/seed/${1}/${600}/${800}`,
            imageThumbUrl: `https://picsum.photos/seed/${1}/${200}/${300}`,
            ratio: 0.75,
            tags: [],
        },
    },
};

export const reducers = generateReducersForStore<IThingsStore>(initialState);

export const clearState = (store: any) => {
    return store;
};
