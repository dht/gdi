export const endpointsConfigOverrides = (connectionType: ConnectionType) => ({
    appStateVoice: {
        id: 'appStateVoice',
        connectionType,
        optimistic: true,
    },
});
