export const endpointsConfigOverrides = {
    appStateSoundboard: {
        id: 'appStateSoundboard',
        connectionType: 'NONE',
    },
    appStateScheduler: {
        id: 'appStateScheduler',
        connectionType: 'FIRESTORE',
        optimistic: true,
    },
    actualManas: {
        id: 'actualManas',
        connectionType: 'FIRESTORE',
        optimistic: true,
    },
    expectedManas: {
        id: 'expectedManas',
        connectionType: 'FIRESTORE',
        optimistic: true,
    },
    scheduleBlocks: {
        id: 'scheduleBlocks',
        connectionType: 'FIRESTORE',
    },
    scheduleSessions: {
        id: 'scheduleSessions',
        connectionType: 'FIRESTORE',
        optimistic: true,
        optimisticPosts: true,
    },
};
