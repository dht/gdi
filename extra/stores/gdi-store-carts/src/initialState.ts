import { generateReducersForStore } from 'redux-store-generator';
import { ICartsStore } from './types';
import { actions } from './actions';

export const initialState: ICartsStore = {
    appStateCarts: {
        stateKey: 'carts',
    },
    currentIdsCarts: {
        cartId: '',
    },
    carts: {
        '1': {
            id: '1',
            name: 'Fantastic Metal Chips',
            description:
                "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
            status: 'published',
            imageUrl: 'https://picsum.photos/seed/1/834/939',
            imageThumbUrl: 'https://picsum.photos/seed/1/200/225',
            ratio: 0.8881789137380192,
            items: [],
            price: 308,
            priceCurrency: '$',
            category: 'Computers',
            dataTags: ['thisWeek'],
            tags: ['actor', 'celebrity', 'entrepreneur'],
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
