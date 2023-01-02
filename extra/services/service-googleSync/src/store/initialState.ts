import { generateReducersForStore } from 'redux-store-generator';
import { IGoogleSyncStore } from './types';
import p from '../../package.json';

export const initialState: IGoogleSyncStore = {
    meta: {
        version: p.version,
        isBeta: p.gdi.isBeta,
        isDraft: p.gdi.isDraft,
        description: p.description,
        packageType: p.gdi.packageType as GdiEntity,
    },
    appStateGoogleSync: {
        stateKey: 'googleSync',
        currentSceneId: '',
        serviceStatus: 'INITIAL',
    },
    googleSyncCategories: {
        '1': {
            id: '1',
            name: 'Level Up Category 1',
            description: 'Level Up Category 1 description',
            parentId: '',
        },
    },
    boosterScenes: {
        '1': {
            id: '1',
            name: 'Scene 1',
            description: 'Scene 1 description',
            imageUrl: 'https://picsum.photos/200/300',
            imageThumbUrl: 'https://picsum.photos/200/300',
            ratio: 1.5,
            order: 1,
            tags: ['tag1', 'tag2'],
            dataTags: [],
            categoryId: '1',
            items: [
                {
                    id: '1',
                    name: 'Item 1',
                    description: 'Item 1 description',
                    imageUrl: 'https://picsum.photos/200/300',
                    imageThumbUrl: 'https://picsum.photos/200/300',
                    ratio: 1.5,
                    tags: ['tag1', 'tag2'],
                    dataTags: [],
                    price: 100,
                    priceBeforeDiscount: 200,
                    position: {
                        x: 0,
                        y: 0,
                        z: 0,
                    },
                    dimensions: {
                        x: 0,
                        y: 0,
                    },
                    url: 'https://picsum.photos/200/300',
                },
            ],
        },
    },
};

export const reducers =
    generateReducersForStore<IGoogleSyncStore>(initialState);

export const clearState = (store: any) => {
    return store;
};
