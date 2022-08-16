export type IAuthState = {
    stateKey: string;
    isLoggedIn: boolean;
};

export type IUser = {
    id: string;
    identifier: string;
    email: string;
    firstName?: string;
    lastName?: string;
    imageUrl?: string;
    thumbUrl?: string;
    company?: string;
    images?: string[];
    phoneNumber?: string;
    dateOfBirth?: string;
    gender?: string;
    source?: string;
    activeApps?: string[];
};

export type IRefreshToken = {
    id: string;
    userId: string;
};

export type IUsers = Record<string, IUser>;
export type IRefreshTokens = Record<string, IRefreshToken>;
