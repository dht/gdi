import { EndpointsConfigOverrides, ConnectionType } from 'redux-connected';

export const endpointsConfigOverrides = (
    connectionType: ConnectionType
): EndpointsConfigOverrides => ({
    appStateComments: {
        id: 'appStateComments',
        connectionType: ConnectionType.NONE,
    },
    comments: {
        id: 'comments',
        connectionType,
        optimistic: true,
    },
});
