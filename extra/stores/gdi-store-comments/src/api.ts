export const endpointsConfigOverrides = (connectionType: ConnectionType) => ({
    appStateComments: {
        id: 'appStateComments',
        connectionType: ConnectionType.NONE,
    },
    comments: {
        id: 'comments',
        connectionType,
        optimistic: true,
    },
});
