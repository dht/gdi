export enum ConnectionType {
    NONE = 'NONE',
    REST = 'REST',
    FIRESTORE = 'FIRESTORE',
    LOCAL_STORAGE = 'LOCAL_STORAGE',
}

export const endpointsConfigOverrides = (connectionType: ConnectionType) => ({
    appStateBiblo: {
        id: 'appStateBiblo',
        connectionType: ConnectionType.NONE,
    },
    interestingReads: {
        id: 'interestingReads',
        connectionType,
        optimistic: true,
    },
    readCategories: {
        id: 'readCategories',
        connectionType,
        optimistic: true,
    },
    metaphors: {
        id: 'readCategories',
        connectionType,
        optimistic: true,
    },
});
