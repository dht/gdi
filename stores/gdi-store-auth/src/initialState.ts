import { generateReducersForStore } from 'redux-store-generator';
import { actions } from './actions';
import { IAuthStore } from './types';
import p from '../package.json';

export const initialState: IAuthStore = {
    meta: {
        version: p.version,
        isBeta: p.gdi.isBeta,
        isDraft: p.gdi.isDraft,
        packageType: p.gdi.packageType as GdiEntity,
    },
    authState: {
        isLoggedIn: false,
    },
    me: {
        id: '',
        uid: '',
        displayName: '',
        company: '',
        email: '',
        emailVerified: false,
        phoneNumber: '',
        photoURL: '',
        providerId: '',
    },
    users: {
        '1': {
            id: '1',
            email: 'email@example.com',
        },
    },
    roles: {
        '1': {
            id: '1',
            role: 'admin',
        },
    },
};

export const reducers = generateReducersForStore<IAuthStore>(initialState);

export const clearState = (store: any) => {
    setTimeout(() => {
        store.dispatch(actions.users.setAll({}));
        store.dispatch(actions.roles.setAll({}));
    });

    return store;
};
