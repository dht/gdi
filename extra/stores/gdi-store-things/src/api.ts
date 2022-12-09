export enum ConnectionType {
    NONE = 'NONE',
    REST = 'REST',
    FIRESTORE = 'FIRESTORE',
    LOCAL_STORAGE = 'LOCAL_STORAGE',
}

export const endpointsConfigOverrides = (connectionType: ConnectionType) => ({
    appStateThings: {
        id: 'appStateThings',
        connectionType: ConnectionType.NONE,
    },
    things: {
        id: 'things',
        connectionType,
        optimistic: true,
    },
});
