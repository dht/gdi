export const endpointsConfigOverrides = (connectionType: ConnectionType) => ({
    appStateProducts: {
        id: 'appStateProducts',
        connectionType: ConnectionType.NONE,
    },
    products: {
        id: 'products',
        connectionType,
        optimistic: true,
    },
});
