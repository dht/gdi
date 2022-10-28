import { generateReducersForStore } from 'redux-store-generator';
import { ILeadsStore } from './types';
import { actions } from './actions';

export const initialState: ILeadsStore = {
    appStateLeads: {
        stateKey: 'leads',
    },
    leads: {
        '2': {
            id: '2',
            title: 'Quidem non est est.',
            leadName: 'Brandi Nolan',
            leadCompanyName: 'Streich - Wunsch',
            leadEmail: '',
            leadPhoneNumber: '458-853-5714 x7712',
            leadNotes: '',
            source: 'other',
            sourceId: '72dc6659-e6ac-4646-bf6d-fd605187b092',
            status: 'lost',
            statusDate: '2022-08-22T09:54:51.994Z',
            endDate: '2023-09-19T20:49:13.859Z',
            description:
                'Excepturi beatae magni deleniti quaerat dolore corporis dolores. Quia vero quam eaque veritatis dicta enim tempora. Voluptatem vitae eaque quidem suscipit dolorem sequi iure dolores sit. Saepe fugit itaque qui rerum necessitatibus qui ab.',
            personId: '8dcfa4de-8d5c-49b4-8ee7-bf722fe19e1f',
            nextVisitDate: '2023-10-28T08:59:56.395Z',
            items: [
                {
                    id: '1',
                    entryType: 'comment',
                    entryDate: '2022-03-02T22:57:03.648Z',
                    description:
                        'Aut voluptas non iure recusandae sequi adipisci eos. Aut impedit sit mollitia pariatur et non. Nisi numquam minus beatae in nihil.',
                    status: 'lost',
                },
            ],
            tags: ['entrepreneur'],
            dataTags: ['thisWeek'],
        },
    },
};

export const reducers = generateReducersForStore<ILeadsStore>(initialState);

export const clearState = (store: any) => {
    setTimeout(() => {
        store.dispatch(actions.leads.setAll({}));
    });
    return store;
};
