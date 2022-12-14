import { EndpointsConfigOverrides, ConnectionType } from 'redux-connected';

export const endpointsConfigOverrides = (
    connectionType: ConnectionType
): EndpointsConfigOverrides => ({
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
