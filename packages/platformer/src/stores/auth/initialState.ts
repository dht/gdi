import { generateReducersForStore } from 'redux-store-generator';
import type { StoreStructure } from 'redux-store-generator';
import { IAuthState, IUsers, IRefreshTokens, IUser } from './types';
import { actions } from './actions';

export type IAuthStore = StoreStructure & {
    appStateAuth: IAuthState;
    me: Partial<IUser>;
    users: IUsers;
    refreshTokens: IRefreshTokens;
};

export const initialState: IAuthStore = {
    appStateAuth: {
        stateKey: 'auth',
        isLoggedIn: false,
    },
    me: {
        firstName: '',
        lastName: '',
        imageUrl: '',
        thumbUrl: '',
        company: '',
        images: [''],
        activeApps: [''],
        phoneNumber: '',
        dateOfBirth: '',
        email: '',
    },

    users: {
        '1': {
            id: '1',
            identifier: '1',
            firstName: 'David',
            lastName: 'Humm',
            imageUrl: '',
            thumbUrl: '',
            company: '',
            images: [''],
            source: 'google',
            phoneNumber: '',
            dateOfBirth: '',
            activeApps: [],
            email: '',
        },
    },
    refreshTokens: {
        '1': {
            id: '1',
            userId: '1',
        },
    },
};

export const reducers = generateReducersForStore<IAuthStore>(initialState);

export const clearState = (store: any) => {
    setTimeout(() => {
        store.dispatch(actions.users.setAll({}));
        store.dispatch(actions.refreshTokens.setAll({}));
    });
};
