export const endpointsConfigOverrides = (connectionType: ConnectionType) => ({
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
