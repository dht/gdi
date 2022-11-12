export const endpointsConfigOverrides = {
    appStateProducts: {
        id: 'appStateProducts',
        connectionType: 'NONE',
    },
    products: {
        id: 'products',
        connectionType: 'FIRESTORE',
        optimistic: true,
    },
};
