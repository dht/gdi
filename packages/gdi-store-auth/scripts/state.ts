import { IAuthStore } from '../src';

export const state: IAuthStore = {
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
