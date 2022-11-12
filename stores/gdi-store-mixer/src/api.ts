export const endpointsConfigOverrides: any = {
    meta: {
        id: 'meta',
        connectionType: 'NONE',
    },
    appStateMixer: {
        id: 'appStateMixer',
        connectionType: 'NONE',
    },
    currentIds: {
        id: 'currentIds',
        connectionType: 'NONE',
    },
    pages: {
        id: 'pages',
        connectionType: 'FIRESTORE',
    },
    libraryImages: {
        id: 'libraryImages',
        connectionType: 'FIRESTORE',
    },
    libraryWidgets: {
        id: 'libraryWidgets',
        connectionType: 'FIRESTORE',
    },
    libraryTypography: {
        id: 'libraryTypography',
        connectionType: 'FIRESTORE',
    },
    libraryPalettes: {
        id: 'libraryPalettes',
        connectionType: 'FIRESTORE',
    },
    libraryPages: {
        id: 'libraryPages',
        connectionType: 'FIRESTORE',
    },
    libraryPageInstances: {
        id: 'libraryPageInstances',
        connectionType: 'FIRESTORE',
    },
    libraryInstances: {
        id: 'libraryInstances',
        connectionType: 'FIRESTORE',
        optimistic: true,
    },
    libraryInstancesProps: {
        id: 'libraryInstancesProps',
        connectionType: 'FIRESTORE',
        optimistic: true,
    },
    locales: {
        id: 'locales',
        connectionType: 'FIRESTORE',
    },
    packages: {
        id: 'packages',
        connectionType: 'FIRESTORE',
    },
};
