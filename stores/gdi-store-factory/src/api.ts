export const endpointsConfigOverrides: any = {
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
        connectionType: 'REST',
        optimistic: true,
        optimisticPosts: true,
    },
    articles: {
        id: 'articles',
        connectionType: 'REST',
        optimistic: true,
        optimisticPosts: true,
    },
    articleCategories: {
        id: 'articleCategories',
        connectionType: 'REST',
        optimistic: true,
        optimisticPosts: true,
    },
};
