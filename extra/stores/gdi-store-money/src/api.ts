export const endpointsConfigOverrides = {
    appStateMoney: {
        id: 'appStateMoney',
        connectionType: 'FIRESTORE',
        optimistic: true,
    },
    moneyLines: {
        id: 'moneyLines',
        connectionType: 'FIRESTORE',
        optimistic: true,
    },
    moneyBehaviors: {
        id: 'moneyBehaviors',
        connectionType: 'FIRESTORE',
    },
};
