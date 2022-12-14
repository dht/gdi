import { EndpointsConfigOverrides, ConnectionType } from 'redux-connected';

export const endpointsConfigOverrides = (
    connectionType: ConnectionType
): EndpointsConfigOverrides => ({
    appStateFactory: {
        id: 'appStateFactory',
        connectionType: ConnectionType.NONE,
    },
    currentIdsFactory: {
        id: 'currentIds',
        connectionType: ConnectionType.NONE,
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
