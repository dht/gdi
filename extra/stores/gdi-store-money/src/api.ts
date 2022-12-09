import { EndpointsConfigOverrides, ConnectionType } from 'redux-connected';

export const endpointsConfigOverrides = (
    connectionType: ConnectionType
): EndpointsConfigOverrides => ({
    appStateMoney: {
        id: 'appStateMoney',
        connectionType,
        optimistic: true,
    },
    moneyLines: {
        id: 'moneyLines',
        connectionType,
        optimistic: true,
    },
    moneyBehaviors: {
        id: 'moneyBehaviors',
        connectionType,
    },
});
