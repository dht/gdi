export const endpointsConfigOverrides: any = {
    appStateDashboard: {
        id: 'appStateDashboard',
        connectionType: 'NONE',
    },
    stats: {
        id: 'stats',
        connectionType: 'REST',
        optimistic: true,
    },
    statsJourneys: {
        id: 'statsJourneys',
        connectionType: 'REST',
        optimistic: true,
    },
    inboxMessages: {
        id: 'inboxMessages',
        connectionType: 'REST',
        optimistic: true,
    },
};
