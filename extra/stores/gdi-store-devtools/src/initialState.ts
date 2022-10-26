import { generateReducersForStore } from 'redux-store-generator';
import { IDevtoolsStore } from './types';

export const initialState: IDevtoolsStore = {
    appStateDevtools: {
        stateKey: 'devtools',
        currentNodeId: 'persons',
        isOn: true,
    },
    stores: {
        auth: { id: 'auth', color: '#e6194B' },
        biblo: { id: 'biblo', color: '#f58231' },
        deb: { id: 'deb', color: '#ffe119' },
        devtools: { id: 'devtools', color: '#bfef45' },
        events: { id: 'events', color: '#3cb44b' },
        knowledge: { id: 'knowledge', color: '#42d4f4' },
        mixer: { id: 'mixer', color: '#4363d8' },
        money: { id: 'money', color: '#911eb4' },
        ppl: { id: 'ppl', color: '#f032e6' },
        site: { id: 'site', color: '#a9a9a9' },
        soundboard: { id: 'soundboard', color: '#000000' },
        studio: { id: 'studio', color: '#469990' },
        tasks: { id: 'tasks', color: '#808000' },
        things: { id: 'things', color: '#9A6324' },
        voice: { id: 'voice', color: '#800000' },
        factory: { id: 'factory', color: 'goldenrod' },
    },
};

export const reducers = generateReducersForStore<IDevtoolsStore>(initialState);

export const clearState = (store: any) => {
    setTimeout(() => {});
    return store;
};
