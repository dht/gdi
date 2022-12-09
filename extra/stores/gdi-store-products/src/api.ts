import { EndpointsConfigOverrides, ConnectionType } from 'redux-connected';

export const endpointsConfigOverrides = (
    connectionType: ConnectionType
): EndpointsConfigOverrides => ({
    appStateProducts: {
        id: 'appStateProducts',
        connectionType: ConnectionType.NONE,
    },
    products: {
        id: 'products',
        connectionType,
        optimistic: true,
    },
});
