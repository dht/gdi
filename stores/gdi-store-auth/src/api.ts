import { EndpointsConfigOverrides } from 'redux-connected';

export const endpointsConfigOverrides = (
    connectionType: ConnectionType
): EndpointsConfigOverrides => ({
    users: {
        id: 'users',
        connectionType,
        optimistic: true,
    },
    roles: {
        id: 'roles',
        connectionType,
        optimistic: true,
    },
});
