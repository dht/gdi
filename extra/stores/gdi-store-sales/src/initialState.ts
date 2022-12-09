import { generateReducersForStore } from 'redux-store-generator';
import { ISalesStore } from './types';
import { actions } from './actions';
import p from '../package.json';

export const initialState: ISalesStore = {
    meta: {
        version: p.version,
        description: p.description,
        isBeta: p.gdi.isBeta,
        isDraft: p.gdi.isDraft,
        packageType: p.gdi.packageType as GdiEntity,
    },
    appStateSales: {
        stateKey: 'sales',
        currentCategory: 'friends',
        currentView: 'grid',
    },
    sales: {
        '1': {
            id: '1',
            title: 'Big sale',
            startDate: '2022-10-10',
            saleType: 'prospect',
            status: 'active',
            statusDate: '2022-10-10',
            description: 'A big sale',
            personId: '1',
            nextVisitDate: '2023-12-10',
            worth: 10000,
            percent: 50,
            isArchived: false,
            isLost: false,
            items: [
                {
                    id: '1',
                    entryDate: '2020-10-10',
                    entryType: 'comment',
                    status: 'pending',
                    description: '',
                },
                {
                    id: '1',
                    entryDate: '2020-10-10',
                    entryType: 'contact',
                    medium: 'inPerson',
                    locationType: 'venue',
                    meetingDate: '',
                    meetingTime: '',
                    personId: '',
                    locationUrl: '',
                    location: '',
                    googleCalendarEventId: '',
                },
            ],
            tags: [],
            dataTags: [],
        },
    },
};

export const reducers = generateReducersForStore<ISalesStore>(initialState);

export const clearState = (store: any) => {
    setTimeout(() => {
        store.dispatch(actions.sales.setAll({}));
    });
    return store;
};
