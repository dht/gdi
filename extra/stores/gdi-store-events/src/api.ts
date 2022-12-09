export enum ConnectionType {
    NONE = 'NONE',
    REST = 'REST',
    FIRESTORE = 'FIRESTORE',
    LOCAL_STORAGE = 'LOCAL_STORAGE',
}

export const endpointsConfigOverrides = (connectionType: ConnectionType) => ({
    appStateEvents: {
        id: 'appStateEvents',
        connectionType: ConnectionType.NONE,
    },
    events: {
        id: 'events',
        connectionType,
        optimistic: true,
    },
    reminders: {
        id: 'reminders',
        connectionType,
        optimistic: true,
    },
});
