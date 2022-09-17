export const endpointsConfigOverrides: any = {
    meta: {
        id: 'meta',
        connectionType: 'NONE',
    },
    appStateFactory: {
        id: 'appStateFactory',
        connectionType: 'NONE',
    },
    currentIdsFactory: {
        id: 'currentIds',
        connectionType: 'NONE',
    },
    layouts: {
        id: 'layouts',
        connectionType: 'FIRESTORE',
        optimistic: true,
        optimisticPosts: true,
    },
};
