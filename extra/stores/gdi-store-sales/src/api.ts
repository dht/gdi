export const endpointsConfigOverrides = (connectionType: ConnectionType) => ({
    appStateSales: {
        id: 'appStateSales',
        connectionType,
        optimistic: true,
    },
    sales: {
        id: 'sales',
        connectionType,
        optimistic: true,
    },
});
