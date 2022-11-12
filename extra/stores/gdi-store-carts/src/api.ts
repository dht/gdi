export const endpointsConfigOverrides = {
    appStateCarts: {
        id: 'appStateCarts',
        connectionType: 'NONE',
    },
    carts: {
        id: 'carts',
        connectionType: 'FIRESTORE',
        optimistic: true,
    },
};
