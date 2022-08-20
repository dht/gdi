import type { StoreStructure } from 'redux-store-generator';

export type IAuthStore = StoreStructure & {
    authState: IAuthState;
    user: IUser;
};

export type IAuthState = {
    isLoggedIn: boolean;
};

export type IUser = {
    uid: string;
    displayName: string | null;
    email: string | null;
    company: string | null;
    emailVerified: boolean;
    phoneNumber: string | null;
    photoURL: string | null;
    providerId: string;
};
