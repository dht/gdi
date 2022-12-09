import { EndpointsConfigOverrides, ConnectionType } from 'redux-connected';

export const endpointsConfigOverrides = (
    connectionType: ConnectionType
): EndpointsConfigOverrides => ({
    appStateThings: {
        id: 'appStateThings',
        connectionType: ConnectionType.NONE,
    },
    things: {
        id: 'things',
        connectionType,
        optimistic: true,
    },
});
