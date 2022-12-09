import { EndpointsConfigOverrides, ConnectionType } from 'redux-connected';

export const endpointsConfigOverrides = (
    connectionType: ConnectionType
): EndpointsConfigOverrides => ({
    assets: {
        id: 'assets',
        connectionType,
    },
    buildings: {
        id: 'buildings',
        connectionType,
    },
    boards: {
        id: 'boards',
        connectionType,
    },
    cameras: {
        id: 'cameras',
        connectionType,
    },
    grounds: {
        id: 'grounds',
        connectionType,
    },
    items: {
        id: 'items',
        connectionType,
    },
    lights: {
        id: 'lights',
        connectionType,
    },
    particles: {
        id: 'particles',
        connectionType,
    },
});
