import { generateReducersForStore } from 'redux-store-generator';
import { IFreelancerStore } from './types';
import p from '../../package.json';

export const initialState: IFreelancerStore = {
    meta: {
        version: p.version,
        isBeta: p.gdi.isBeta,
        isDraft: p.gdi.isDraft,
        description: p.description,
        packageType: p.gdi.packageType as GdiEntity,
    },
    appStateFreelancer: {
        stateKey: 'freelancer',
        currentUpgradeId: '',
    },
    upgrades: {
        '1': {
            id: '1',
            name: 'Upgrade 1',
            description: 'Upgrade 1 description',
            imageUrl: 'https://picsum.photos/200/300',
            imageThumbUrl: 'https://picsum.photos/200/300',
            ratio: 1.5,
            tags: ['tag1', 'tag2'],
            price: 100,
            priceBeforeDiscount: 200,
            dataTags: [],
            portfolio: [
                {
                    id: '1',
                    name: 'Portfolio 1',
                    description: 'Portfolio 1 description',
                    imageUrl: 'https://picsum.photos/200/300',
                    imageThumbUrl: 'https://picsum.photos/200/300',
                    ratio: 1.5,
                    tags: ['tag1', 'tag2'],
                    dataTags: [],
                },
                {
                    id: '2',
                    name: 'Portfolio 2',
                    description: 'Portfolio 2 description',
                    imageUrl: 'https://picsum.photos/200/300',
                    imageThumbUrl: 'https://picsum.photos/200/300',
                    ratio: 1.5,
                    tags: ['tag1', 'tag2'],
                    dataTags: [],
                },
            ],
            freelancer: {
                id: '1',
                name: 'Freelancer 1',
                description: 'Freelancer 1 description',
                imageUrl: 'https://picsum.photos/200/300',
                imageThumbUrl: 'https://picsum.photos/200/300',
                ratio: 1.5,
                tags: ['tag1', 'tag2'],
                dataTags: [],
            },
        },
    },
    upgradeCategories: {
        '1': {
            id: '1',
            name: 'Upgrade Category 1',
            parentId: '',
        },
    },
};

export const reducers =
    generateReducersForStore<IFreelancerStore>(initialState);

export const clearState = (store: any) => {
    return store;
};
