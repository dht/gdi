import { generateReducersForStore } from 'redux-store-generator';
import { actions } from './actions';
import { IAuthStore } from './types';

export const initialState: IAuthStore = {
    authState: {
        isLoggedIn: false,
    },
    user: {
        uid: '',
        displayName: '',
        company: '',
        email: '',
        emailVerified: false,
        phoneNumber: '',
        photoURL: '',
        providerId: '',
    },
};

export const reducers = generateReducersForStore<IAuthStore>(initialState);

export const clearState = (store: any) => {
    return store;
};
