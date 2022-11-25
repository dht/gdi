export const endpointsConfigOverrides = (connectionType: ConnectionType) => ({
    appStateCarts: {
        id: 'appStateCarts',
        connectionType: 'NONE',
    },
    carts: {
        id: 'carts',
        connectionType,
        optimistic: true,
    },
});
