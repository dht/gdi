export enum ConnectionType {
    NONE = 'NONE',
    REST = 'REST',
    FIRESTORE = 'FIRESTORE',
    LOCAL_STORAGE = 'LOCAL_STORAGE',
}

export const endpointsConfigOverrides = (connectionType: ConnectionType) => ({
    appStateComments: {
        id: 'appStateComments',
        connectionType: ConnectionType.NONE,
    },
    comments: {
        id: 'comments',
        connectionType,
        optimistic: true,
    },
});
