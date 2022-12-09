export enum ConnectionType {
    NONE = 'NONE',
    REST = 'REST',
    FIRESTORE = 'FIRESTORE',
    LOCAL_STORAGE = 'LOCAL_STORAGE',
}

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
