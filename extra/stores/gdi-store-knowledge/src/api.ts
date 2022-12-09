import { EndpointsConfigOverrides, ConnectionType } from 'redux-connected';

export const endpointsConfigOverrides = (
    connectionType: ConnectionType
): EndpointsConfigOverrides => ({
    appStateKnowledge: {
        id: 'appStateKnowledge',
        connectionType: ConnectionType.NONE,
    },
    linkCategories: {
        id: 'appStateKnowledge',
        connectionType,
        optimistic: true,
    },
    links: {
        id: 'appStateKnowledge',
        connectionType,
        optimistic: true,
    },
});
