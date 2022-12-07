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
