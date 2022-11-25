export const endpointsConfigOverrides = (connectionType: ConnectionType) => ({
    appStateDashboard: {
        id: 'appStateDashboard',
        connectionType: 'NONE',
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
