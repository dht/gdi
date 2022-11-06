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
        connectionType: 'REST',
    },
    libraryImages: {
        id: 'libraryImages',
        connectionType: 'REST',
    },
    libraryWidgets: {
        id: 'libraryWidgets',
        connectionType: 'REST',
    },
    libraryTypography: {
        id: 'libraryTypography',
        connectionType: 'REST',
    },
    libraryPalettes: {
        id: 'libraryPalettes',
        connectionType: 'REST',
    },
    libraryPages: {
        id: 'libraryPages',
        connectionType: 'REST',
    },
    libraryPageInstances: {
        id: 'libraryPageInstances',
        connectionType: 'REST',
    },
    libraryInstances: {
        id: 'libraryInstances',
        connectionType: 'REST',
        optimistic: true,
    },
    libraryInstancesProps: {
        id: 'libraryInstancesProps',
        connectionType: 'REST',
        optimistic: true,
    },
    locales: {
        id: 'locales',
        connectionType: 'REST',
    },
    packages: {
        id: 'packages',
        connectionType: 'REST',
    },
};
