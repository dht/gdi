export const endpointsConfigOverrides = (connectionType: ConnectionType) => ({
    appStateKnowledge: {
        id: 'appStateKnowledge',
        connectionType: 'NONE',
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
