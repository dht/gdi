import { generateReducersForStore } from 'redux-store-generator';
import { ICartsStore } from './types';
import { actions } from './actions';
import p from '../package.json';

export const initialState: ICartsStore = {
    meta: {
        version: p.version,
        description: p.description,
        isBeta: p.gdi.isBeta,
        isDraft: p.gdi.isDraft,
        packageType: p.gdi.packageType as GdiEntity,
    },
    appStateCarts: {
        stateKey: 'carts',
    },
    currentIdsCarts: {
        cartId: '',
    },
    carts: {
        '1': {
            id: '1',
            name: 'Recycled Plastic Soap',
            startDate: '2022-10-26 04:32:32',
            endDate: '2022-10-25 20:31:44',
            userId: '8',
            status: 'draft',
            items: [
                {
                    id: '1',
                    productId: '7',
                    price: 26,
                    quantity: 7,
                    notes: 'Sit a dicta ipsa qui autem sunt.',
                    dateAdded: '2022-10-26 00:33:32',
                },
            ],
            tags: ['entrepreneur', 'celebrity', 'actor'],
            dataTags: ['draft'],
            imageUrl: 'https://picsum.photos/seed/1/1380/838',
            imageThumbUrl: 'https://picsum.photos/seed/1/200/121',
            ratio: 1.6467780429594272,
        },
    },
};

export const reducers = generateReducersForStore<ICartsStore>(initialState);

export const clearState = (store: any) => {
    setTimeout(() => {
        store.dispatch(actions.carts.setAll({}));
    });
    return store;
};
