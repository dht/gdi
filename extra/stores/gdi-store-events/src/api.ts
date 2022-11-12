export const endpointsConfigOverrides = {
    appStateEvents: {
        id: 'appStateEvents',
        connectionType: 'NONE',
    },
    events: {
        id: 'events',
        connectionType: 'FIRESTORE',
        optimistic: true,
    },
    reminders: {
        id: 'reminders',
        connectionType: 'FIRESTORE',
        optimistic: true,
    },
};
