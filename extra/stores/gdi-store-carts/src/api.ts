import { EndpointsConfigOverrides, ConnectionType } from 'redux-connected';

export const endpointsConfigOverrides = (
    connectionType: ConnectionType
): EndpointsConfigOverrides => ({
    appStateCarts: {
        id: 'appStateCarts',
        connectionType: ConnectionType.NONE,
    },
    carts: {
        id: 'carts',
        connectionType,
        optimistic: true,
    },
});
