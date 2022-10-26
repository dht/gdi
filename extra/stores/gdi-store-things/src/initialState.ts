import { generateReducersForStore } from 'redux-store-generator';
import { IThingsStore } from './types';

export const initialState: IThingsStore = {
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
