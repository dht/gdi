export const endpointsConfigOverrides = {
    appStateEvents: {
        id: 'appStateEvents',
        connectionType: 'NONE',
    },
    events: {
        id: 'events',
        connectionType: 'REST',
        optimistic: true,
    },
    reminders: {
        id: 'reminders',
        connectionType: 'REST',
        optimistic: true,
    },
};
