import { EndpointsConfigOverrides, ConnectionType } from 'redux-connected';

export const endpointsConfigOverrides = (
    connectionType: ConnectionType
): EndpointsConfigOverrides => ({
    meta: {
        id: 'meta',
        connectionType: ConnectionType.NONE,
    },
    appStateMixer: {
        id: 'appStateMixer',
        connectionType: ConnectionType.NONE,
    },
    currentIds: {
        id: 'currentIds',
        connectionType: ConnectionType.NONE,
    },
    libraryImages: {
        id: 'libraryImages',
        connectionType,
    },
    libraryWidgets: {
        id: 'libraryWidgets',
        connectionType,
    },
    libraryTypography: {
        id: 'libraryTypography',
        connectionType,
    },
    libraryPalettes: {
        id: 'libraryPalettes',
        connectionType,
    },
    libraryPages: {
        id: 'libraryPages',
        connectionType,
    },
    libraryPageInstances: {
        id: 'libraryPageInstances',
        connectionType,
    },
    libraryInstances: {
        id: 'libraryInstances',
        connectionType,
        optimistic: true,
    },
    libraryInstancesProps: {
        id: 'libraryInstancesProps',
        connectionType,
        optimistic: true,
    },
    locales: {
        id: 'locales',
        connectionType,
    },
    libraryDatasets: {
        id: 'libraryDatasets',
        connectionType,
        optimistic: true,
    },
    packages: {
        id: 'packages',
        connectionType,
    },
});
