import { generateReducersForStore } from 'redux-store-generator';
import { actions } from './actions';
import { IDashboardStore } from './types';
import p from '../package.json';

export const initialState: IDashboardStore = {
    meta: {
        version: p.version,
        isBeta: p.gdi.isBeta,
        isDraft: p.gdi.isDraft,
        packageType: p.gdi.packageType as GdiEntity,
    },
    appStateDashboard: {
        stateKey: 'appStateDashboard',
    },
    currentIdsDashboard: {
        inboxMessageId: '',
    },
    stats: {
        allLeads: {
            id: 'allLeads',
            order: 0,
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
    inboxMessages: {
        inboxMessage_1: {
            id: 'inboxMessage_1',
            date: '2020-01-01',
            title: 'New Lead',
            description: 'New lead has been added',
            iconName: 'user',
            color: 'blue',
            messageType: 'info',
        },
    },
};

export const reducers = generateReducersForStore<IDashboardStore>(initialState);

export const clearState = (store: any) => {
    setTimeout(() => {
        store.dispatch(actions.stats.setAll({}));
        store.dispatch(actions.statsJourneys.setAll({}));
        store.dispatch(actions.inboxMessages.setAll({}));
    });
    return store;
};
