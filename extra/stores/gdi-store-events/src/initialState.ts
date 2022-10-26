import { generateReducersForStore } from 'redux-store-generator';
import { IEventsStore } from './types';

export const initialState: IEventsStore = {
    appStateEvents: {
        stateKey: 'events',
        currentNodeId: 'events',
    },
    events: {
        '1': {
            id: '1',
            name: '',
            date: '',
            location: '',
            rating: 10,
            description: '',
            link: '',
            googleEventId: '',
        },
    },
};

export const reducers = generateReducersForStore<IEventsStore>(initialState);

export const clearState = (store: any) => {
    return store;
};
