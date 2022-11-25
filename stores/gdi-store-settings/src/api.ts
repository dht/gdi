export const endpointsConfigOverrides = (connectionType: ConnectionType) => ({
    settings: {
        id: 'settings',
        connectionType,
    },
});
