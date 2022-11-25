export const endpointsConfigOverrides = (connectionType: ConnectionType) => ({
    appStateComments: {
        id: 'appStateComments',
        connectionType: 'NONE',
    },
    comments: {
        id: 'comments',
        connectionType,
        optimistic: true,
    },
});
