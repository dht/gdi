export const endpointsConfigOverrides = (connectionType: ConnectionType) => ({
    appStateDashboard: {
        id: 'appStateDashboard',
        connectionType: ConnectionType.NONE,
    },
    stats: {
        id: 'stats',
        connectionType,
        optimistic: true,
    },
    statsJourneys: {
        id: 'statsJourneys',
        connectionType,
        optimistic: true,
    },
    inboxMessages: {
        id: 'inboxMessages',
        connectionType,
        optimistic: true,
    },
});
