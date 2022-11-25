export const endpointsConfigOverrides = (connectionType: ConnectionType) => ({
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
