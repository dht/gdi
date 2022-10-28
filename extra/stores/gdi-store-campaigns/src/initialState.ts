import { generateReducersForStore } from 'redux-store-generator';
import { ICampaignsStore } from './types';
import { actions } from './actions';

export const initialState: ICampaignsStore = {
    appStateCampaigns: {
        stateKey: 'campaigns',
    },
    campaigns: {
        '1': {
            id: '1',
            startDate: '2022-04-08T21:22:00.037Z',
            endDate: '',
            completedDate: '',
            title: 'Minima fugiat maiores totam.',
            description:
                'Voluptatibus at voluptatem natus cum sed quia. Cum quia ipsam consequatur architecto. Molestiae adipisci ut atque suscipit voluptatum aut. Id necessitatibus itaque dolor architecto fuga illum. Dolores rem culpa voluptatem beatae quis necessitatibus soluta placeat. Dicta cumque et odio nihil aperiam.',
            status: 'archived',
            source: 'facebook',
            tags: ['actor', 'celebrity'],
            dataTags: ['thisWeek'],
            budget: 2687,
            budgetSpent: 231,
            metrics: ['traffic', 'registrations', 'likes', 'sales'],
            externalCampaignUrl: 'http://unruly-reserve.com',
            destinationUrl: 'https://broken-violence.com',
            metricsData: {
                traffic: 6092,
            },
        },
    },
};

export const reducers = generateReducersForStore<ICampaignsStore>(initialState);

export const clearState = (store: any) => {
    setTimeout(() => {
        store.dispatch(actions.campaigns.setAll({}));
    });
    return store;
};
