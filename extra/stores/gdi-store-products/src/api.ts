export enum ConnectionType {
    NONE = 'NONE',
    REST = 'REST',
    FIRESTORE = 'FIRESTORE',
    LOCAL_STORAGE = 'LOCAL_STORAGE',
}

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
