export const endpointsConfigOverrides: any = {
    appStateMixer: {
        id: 'appStateMixer',
        connectionType: 'NONE',
    },
    instances: {
        id: 'instances',
        connectionType: 'FIRESTORE',
        optimistic: true,
    },
    fonts: {
        id: 'fonts',
        connectionType: 'FIRESTORE',
        optimistic: true,
    },
};
