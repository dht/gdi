export const endpointsConfigOverrides = {
    appStateSoundboard: {
        id: 'appStateSoundboard',
        connectionType: 'NONE',
    },
    appStateScheduler: {
        id: 'appStateScheduler',
        connectionType: 'REST',
        optimistic: true,
    },
    actualManas: {
        id: 'actualManas',
        connectionType: 'REST',
        optimistic: true,
    },
    expectedManas: {
        id: 'expectedManas',
        connectionType: 'REST',
        optimistic: true,
    },
    scheduleBlocks: {
        id: 'scheduleBlocks',
        connectionType: 'REST',
    },
    scheduleSessions: {
        id: 'scheduleSessions',
        connectionType: 'REST',
        optimistic: true,
        optimisticPosts: true,
    },
};
