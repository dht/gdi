import { generateReducersForStore } from 'redux-store-generator';
import { IOrdersStore } from './types';
import { actions } from './actions';
import p from '../package.json';

export const initialState: IOrdersStore = {
    meta: {
        version: p.version,
        description: p.description,
        isBeta: p.gdi.isBeta,
        isDraft: p.gdi.isDraft,
        packageType: p.gdi.packageType as GdiEntity,
    },
    appStateOrders: {
        stateKey: 'orders',
    },
    currentIdsOrders: {
        orderId: '',
    },
    orders: {
        '1': {
            id: '1',
            cartId: '5',
            name: 'Sleek Metal Cheese',
            startDate: '2022-10-26 07:38:40',
            endDate: '',
            userId: '10',
            status: 'processed',
            items: [
                {
                    id: '1',
                    productId: '5',
                    price: 125,
                    quantity: 2,
                    notes: 'Voluptatem id repellat et quibusdam.',
                    dateAdded: '2022-10-26 10:19:30',
                },
                {
                    id: '2',
                    productId: '10',
                    price: 745,
                    quantity: 8,
                    notes: 'Et sit et.',
                    dateAdded: '2022-10-26 04:05:28',
                },
            ],
            tags: ['celebrity', 'actor'],
            dataTags: ['draft'],
            imageUrl: 'https://picsum.photos/seed/1/1437/854',
            imageThumbUrl: 'https://picsum.photos/seed/1/200/119',
            ratio: 1.6826697892271663,
        },
    },
    orderJournals: {
        '1': {
            id: '1',
            orderId: '8',
            title: 'voluptates',
            entryDate: '2022-10-26 09:00:32',
        },
    },
    coupons: {
        '1': {
            id: '1',
            name: 'Unbranded Plastic Keyboard',
            startDate: '2022-10-25 14:58:29',
            endDate: '2022-10-26 08:32:59',
            status: 'completed',
            items: [
                {
                    id: '1',
                    value: '1887327b-e15a-4402-aba8-bc87c4969aaf',
                    notes: 'Possimus fugiat officia quaerat omnis cumque consequatur autem. Aut enim quo est occaecati autem quia. Repellendus impedit dolore exercitationem et a et quia. Consequatur autem pariatur ut aperiam ex.',
                    wasUsed: false,
                },
                {
                    id: '2',
                    value: '825d9906-72f0-4eb1-988a-456875e9ae81',
                    notes: 'Est suscipit omnis sit debitis ipsam nihil pariatur. Eveniet iure asperiores in. Eum est eum nostrum voluptatibus autem. Dolore veniam sed autem.',
                    wasUsed: true,
                    orderId: '3',
                    cartId: '6',
                    userId: '2',
                },
            ],
            tags: ['entrepreneur', 'celebrity'],
            distribution: 'fixed',
            amount: 6,
            dataTags: ['draft'],
            imageUrl: 'https://picsum.photos/seed/1/1557/682',
            imageThumbUrl: 'https://picsum.photos/seed/1/200/88',
            ratio: 2.2829912023460412,
            couponType: 'freeShipping',
            couponValue: {
                unit: 'amount',
                value: 1,
            },
            productId: '',
            cap: 0,
            notes: '',
        },
    },
};

export const reducers = generateReducersForStore<IOrdersStore>(initialState);

export const clearState = (store: any) => {
    setTimeout(() => {
        store.dispatch(actions.orders.setAll({}));
    });
    return store;
};
