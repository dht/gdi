// AUTO-GENERATED

import type { StoreStructure } from 'redux-store-generator';

export const A3 = {};

declare global {
    export type IAuthStore = StoreStructure & {
        authState: IAuthState;
        me: IUser;
        users: IUsers;
        roles: IRoles;
    };

    export type IAuthState = {
        isLoggedIn: boolean;
    };

    export type IUser = {
        id: string;
        uid?: string;
        displayName?: string;
        email?: string;
        company?: string;
        emailVerified?: boolean;
        phoneNumber?: string;
        photoURL?: string;
        providerId?: string;
    };

    export type IUsers = Record<string, IUser>;

    export type Role =
        | 'none'
        | 'admin'
        | 'designer'
        | 'content_editor'
        | 'translator';

    export type IRole = {
        id: string;
        role: Role;
    };

    export type IRoles = Record<string, IRole>;
}
