export const endpointsConfigOverrides = (connectionType: ConnectionType) => ({
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
