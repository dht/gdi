export enum ConnectionType {
    NONE = 'NONE',
    REST = 'REST',
    FIRESTORE = 'FIRESTORE',
    LOCAL_STORAGE = 'LOCAL_STORAGE',
}

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
