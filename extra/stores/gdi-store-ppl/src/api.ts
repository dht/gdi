import { EndpointsConfigOverrides, ConnectionType } from 'redux-connected';

export const endpointsConfigOverrides = (
    connectionType: ConnectionType
): EndpointsConfigOverrides => ({
    appStatePpl: {
        id: 'appStatePpl',
        connectionType,
        optimistic: true,
    },
    persons: {
        id: 'persons',
        connectionType,
        optimistic: true,
    },
});
