export enum ConnectionType {
    NONE = 'NONE',
    REST = 'REST',
    FIRESTORE = 'FIRESTORE',
    LOCAL_STORAGE = 'LOCAL_STORAGE',
}

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
