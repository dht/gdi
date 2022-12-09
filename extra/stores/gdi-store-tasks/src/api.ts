import { EndpointsConfigOverrides, ConnectionType } from 'redux-connected';

export const endpointsConfigOverrides = (
    connectionType: ConnectionType
): EndpointsConfigOverrides => ({
    appStateTasks: {
        id: 'appStateTasks',
        connectionType: ConnectionType.NONE,
    },
    projects: {
        id: 'projects',
        connectionType,
        optimistic: true,
    },
    tickets: {
        id: 'tickets',
        connectionType,
        optimistic: true,
        optimisticPosts: true,
    },
    worklogs: {
        id: 'activeTaskWorklogs',
        connectionType,
        optimistic: true,
    },
    sessions: {
        id: 'recentSessions',
        connectionType,
        optimistic: true,
    },
    recentSessions: {
        id: 'recentSessions',
        connectionType,
        optimistic: true,
    },
});
