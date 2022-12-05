import { generateReducersForStore } from 'redux-store-generator';
import { actions } from './actions';
import { IDashboardStore } from './types';
import p from '../package.json';

export const initialState: IDashboardStore = {
    meta: {
        version: p.version,
        description: p.description,
        isBeta: p.gdi.isBeta,
        isDraft: p.gdi.isDraft,
        packageType: p.gdi.packageType as GdiEntity,
    },
    appStateDashboard: {
        stateKey: 'appStateDashboard',
        showNotifications: false,
        showReader: false,
        readerUrl: '',
        showQuickTip: false,
        quickTipUrl: '',
        showMainDisplay: false,
        mainDisplayData: {},
        showMiniApp: true,
        miniAppData: {},
    },
    currentIdsDashboard: {
        inboxMessageId: '',
    },
    stats: {
        githubStars: {
            id: 'githubStars',
            order: 0,
            title: 'Github stars',
            value: 5,
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
            title: 'Your new company logo is ready',
            description: 'Jay25 has just completed it',
            iconName: 'Edit',
            iconLogoUrl: 'https://static-b9ebe.web.app/logo-fiverr.png',
            tags: ['branding'],
            date: '2022-10-10 23:40:00',
            domain: 'office',
            domainSemantic: 'outsourcing',
            serviceName: 'fiverr',
            messageType: 'interrupt',
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
