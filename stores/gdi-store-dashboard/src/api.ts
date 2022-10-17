export const endpointsConfigOverrides: any = {
    dashboard: {
        id: 'dashboard',
        connectionType: 'FIRESTORE',
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
};
