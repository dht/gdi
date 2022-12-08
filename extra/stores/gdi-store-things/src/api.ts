export const endpointsConfigOverrides = (connectionType: ConnectionType) => ({
    appStateThings: {
        id: 'appStateThings',
        connectionType: ConnectionType.NONE,
    },
    things: {
        id: 'things',
        connectionType,
        optimistic: true,
    },
});
