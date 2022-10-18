export const endpointsConfigOverrides: any = {
    appStateDashboard: {
        id: 'appStateDashboard',
        connectionType: 'NONE',
    },
    stats: {
        id: 'stats',
        connectionType: 'FIRESTORE',
        optimistic: true,
    },
    statsJourneys: {
        id: 'statsJourneys',
        connectionType: 'FIRESTORE',
        optimistic: true,
    },
    inboxMessages: {
        id: 'inboxMessages',
        connectionType: 'FIRESTORE',
        optimistic: true,
    },
};
