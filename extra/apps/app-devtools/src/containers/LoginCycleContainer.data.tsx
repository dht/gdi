import { collection_all, generateCollection } from 'redux-store-generator';

export const steps: any = {
    requestedRoute: {
        id: 'requestedRoute',
        title: 'Saving requested route',
        indexes: [],
    },
    me: {
        id: 'me',
        title: 'Pinging /me endpoint',
        indexes: [],
    },
    redirectToLogin: {
        id: 'redirectToLogin',
        title: 'Redirecting to login',
        indexes: [],
    },
    login: {
        id: 'login',
        title: 'Logging in',
        indexes: [],
    },
    tokens: {
        id: 'tokens',
        title: 'Saving tokens to localStorage',
        indexes: [],
    },
    redirectingOriginalRoute: {
        id: 'redirectingOriginalRoute',
        title: 'Redirecting to original route',
        indexes: [],
    },
    apiRoot: {
        id: 'apiRoot',
        title: 'Fetching user data',
        indexes: [],
    },
    expiredAccessToken: {
        id: 'expiredAccessToken',
        title: 'Access token expired',
        indexes: [],
    },
    refreshTokens: {
        id: 'refreshTokens',
        title: 'Refreshing tokens',
        indexes: [],
    },
    logout: {
        id: 'logout',
        title: 'Logout',
        indexes: [],
    },
};

export const lifecycleActions: any = {
    invalidateAccessToken: {
        id: 'invalidateAccessToken',
        title: 'invalidate accessToken',
    },
    invalidateRefreshToken: {
        id: 'invalidateRefreshToken',
        title: 'invalidate refreshToken',
    },
    logoutSilent: {
        id: 'logoutSilent',
        title: 'logout (both_tokens)',
    },
    logout: {
        id: 'logout',
        title: 'logout (+google)',
    },
};

export const reducer = generateCollection('stages');
export const actions = collection_all<any>('stages');
