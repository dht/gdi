export const endpointsConfigOverrides = (connectionType: ConnectionType) => ({
    appStateThings: {
        id: 'appStateThings',
        connectionType: 'NONE',
    },
    things: {
        id: 'things',
        connectionType,
        optimistic: true,
    },
});
