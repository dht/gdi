import { EndpointsConfigOverrides, ConnectionType } from 'redux-connected';

export const endpointsConfigOverrides = (
    connectionType: ConnectionType
): EndpointsConfigOverrides => ({
    appStateMoney: {
        id: 'appStateMoney',
        connectionType: ConnectionType.NONE,
    },
    moneyLines: {
        id: 'moneyLines',
        connectionType,
        optimistic: true,
        optimisticPosts: true,
    },
    moneyBehaviors: {
        id: 'moneyBehaviors',
        connectionType,
        optimistic: true,
        optimisticPosts: true,
    },
});
