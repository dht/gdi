enum ConnectionType {
    NONE = 'NONE',
    FIRESTORE = 'FIRESTORE',
}

export const endpointsConfigOverrides = (connectionType: ConnectionType) => ({
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
});
