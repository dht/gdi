import { generateReducersForStore } from 'redux-store-generator';
import { IPplStore } from './types';
import { actions } from './actions';

export const initialState: IPplStore = {
    appStatePpl: {
        stateKey: 'ppl',
        currentCategory: 'friends',
        currentView: 'grid',
    },
    persons: {
        '1': {
            id: '1',
            key: 'james_bond',
            firstName: 'James',
            lastName: 'Bond',
            dateOfBirth: '1980-10-10',
            shortDescription: '',
            imageUrl: '',
            imageThumbUrl: '',
            ratio: 1,
            items: [{}],
            socialTwitterUrl: '',
            socialFacebookUrl: '',
            socialInstagramUrl: '',
            socialLinkedInUrl: '',
            wikipediaUrl: '',
            pinterestUrl: '',
            website: '',
            phoneNumber: '',
            email: '',
            company: '',
            jobTitle: '',
            netWorth: 1000000000,
            notes: '',
            tags: [''],
            tier: 1,
            height: 1.92,
            gender: 'male',
            category: 'global',
        },
    },
};

export const reducers = generateReducersForStore<IPplStore>(initialState);

export const clearState = (store: any) => {
    setTimeout(() => {
        store.dispatch(actions.persons.setAll({}));
    });
    return store;
};
