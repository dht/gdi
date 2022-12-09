export enum ConnectionType {
    NONE = 'NONE',
    REST = 'REST',
    FIRESTORE = 'FIRESTORE',
    LOCAL_STORAGE = 'LOCAL_STORAGE',
}

export const endpointsConfigOverrides = (connectionType: ConnectionType) => ({
    appStateKnowledge: {
        id: 'appStateKnowledge',
        connectionType: ConnectionType.NONE,
    },
    linkCategories: {
        id: 'appStateKnowledge',
        connectionType,
        optimistic: true,
    },
    links: {
        id: 'appStateKnowledge',
        connectionType,
        optimistic: true,
    },
});
