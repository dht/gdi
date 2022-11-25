export const endpointsConfigOverrides = (connectionType: ConnectionType) => ({
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
        connectionType,
        optimistic: true,
        optimisticPosts: true,
    },
    articles: {
        id: 'articles',
        connectionType,
        optimistic: true,
        optimisticPosts: true,
    },
    articleCategories: {
        id: 'articleCategories',
        connectionType,
        optimistic: true,
        optimisticPosts: true,
    },
});
