export enum ConnectionType {
    NONE = 'NONE',
    REST = 'REST',
    FIRESTORE = 'FIRESTORE',
    LOCAL_STORAGE = 'LOCAL_STORAGE',
}

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
