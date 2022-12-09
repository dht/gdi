import { EndpointsConfigOverrides, ConnectionType } from 'redux-connected';

export const endpointsConfigOverrides = (
    connectionType: ConnectionType
): EndpointsConfigOverrides => ({
    appStateSales: {
        id: 'appStateSales',
        connectionType,
        optimistic: true,
    },
    sales: {
        id: 'sales',
        connectionType,
        optimistic: true,
    },
});
