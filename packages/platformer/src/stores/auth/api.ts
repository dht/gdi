import {
    RetryStrategy,
    ConnectionType,
    EndpointsConfigOverrides,
} from 'redux-connected';

export const endpointsConfigOverrides: EndpointsConfigOverrides = {
    appStateAuth: {
        id: 'appStateAuth',
        connectionType: ConnectionType.NONE,
    },
    users: {
        id: 'users',
        connectionType: ConnectionType.REST,
    },
    me: {
        id: 'me',
        connectionType: ConnectionType.REST,
        retryStrategy: RetryStrategy.X2_TIMES,
    },
    refreshTokens: {
        id: 'refreshTokens',
        connectionType: ConnectionType.REST,
    },
};
