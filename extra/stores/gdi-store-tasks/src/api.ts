enum ConnectionType {
    NONE = 'NONE',
    FIRESTORE = 'REST',
}

export const endpointsConfigOverrides = {
    appStateTasks: {
        id: 'appStateTasks',
        connectionType: ConnectionType.NONE,
    },
    projects: {
        id: 'projects',
        connectionType: ConnectionType.FIRESTORE,
        optimistic: true,
    },
    tickets: {
        id: 'tickets',
        connectionType: ConnectionType.FIRESTORE,
        optimistic: true,
        optimisticPosts: true,
    },
    worklogs: {
        id: 'activeTaskWorklogs',
        connectionType: ConnectionType.FIRESTORE,
        optimistic: true,
    },
    sessions: {
        id: 'recentSessions',
        connectionType: ConnectionType.FIRESTORE,
        optimistic: true,
    },
    recentSessions: {
        id: 'recentSessions',
        connectionType: ConnectionType.FIRESTORE,
        optimistic: true,
    },
};
