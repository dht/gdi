export const endpointsConfigOverrides = (connectionType: ConnectionType) => ({
    appStateProducts: {
        id: 'appStateProducts',
        connectionType: 'NONE',
    },
    products: {
        id: 'products',
        connectionType,
        optimistic: true,
    },
});
