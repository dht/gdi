export enum ConnectionType {
    NONE = 'NONE',
    REST = 'REST',
    FIRESTORE = 'FIRESTORE',
    LOCAL_STORAGE = 'LOCAL_STORAGE',
}

export const endpointsConfigOverrides = (connectionType: ConnectionType) => ({
    appStateSoundboard: {
        id: 'appStateSoundboard',
        connectionType: ConnectionType.NONE,
    },
    appStateScheduler: {
        id: 'appStateScheduler',
        connectionType,
        optimistic: true,
    },
    actualManas: {
        id: 'actualManas',
        connectionType,
        optimistic: true,
    },
    expectedManas: {
        id: 'expectedManas',
        connectionType,
        optimistic: true,
    },
    scheduleBlocks: {
        id: 'scheduleBlocks',
        connectionType,
    },
    scheduleSessions: {
        id: 'scheduleSessions',
        connectionType,
        optimistic: true,
        optimisticPosts: true,
    },
});
