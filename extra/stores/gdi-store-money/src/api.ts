export const endpointsConfigOverrides = (connectionType: ConnectionType) => ({
    appStateMoney: {
        id: 'appStateMoney',
        connectionType,
        optimistic: true,
    },
    moneyLines: {
        id: 'moneyLines',
        connectionType,
        optimistic: true,
    },
    moneyBehaviors: {
        id: 'moneyBehaviors',
        connectionType,
    },
});
