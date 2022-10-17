import { generateReducersForStore } from 'redux-store-generator';
import { actions } from './actions';
import { IDashboardStore } from './types';

export const initialState: IDashboardStore = {
    dashboard: {
        stateKey: 'dashboard',
        openTasks: 10,
    },
    stats: {
        allLeads: {
            order: 0,
            id: 'allLeads',
            title: 'All Leads',
            value: 4,
            mode: 'manual',
            clickEffect: 'nudge',
            unit: 'number',
            href: '#',
        },
    },
    statsJourneys: {
        'allLeads_2022-01-01': {
            id: 'allLeads_2022-01-01',
            statId: 'allLeads',
            date: '2020-01-01',
            value: 4,
        },
    },
};

export const reducers = generateReducersForStore<IDashboardStore>(initialState);

export const clearState = (store: any) => {
    setTimeout(() => {
        // store.dispatch(actions.dashboard.setAll({}));
    });
    return store;
};
