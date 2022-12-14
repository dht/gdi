import { EndpointsConfigOverrides, ConnectionType } from 'redux-connected';

export const endpointsConfigOverrides = (
    connectionType: ConnectionType
): EndpointsConfigOverrides => ({
    meta: {
        id: 'meta',
        connectionType,
        optimistic: true,
    },
    palette: {
        id: 'palette',
        connectionType,
        optimistic: true,
    },
    fonts: {
        id: 'fonts',
        connectionType,
        optimistic: true,
    },
    pages: {
        id: 'pages',
        connectionType,
    },
    pageInstances: {
        id: 'pageInstances',
        connectionType,
    },
    breakpoints: {
        id: 'breakpoints',
        connectionType,
        optimistic: true,
    },
    instances: {
        id: 'instances',
        connectionType,
        optimistic: true,
    },
    widgets: {
        id: 'widgets',
        connectionType,
        optimistic: true,
    },
    images: {
        id: 'images',
        connectionType,
        optimistic: true,
    },
    instancesProps: {
        id: 'instancesProps',
        connectionType,
        optimistic: true,
    },
    siteProperties: {
        id: 'siteProperties',
        connectionType,
        optimistic: true,
    },
    datasets: {
        id: 'datasets',
        connectionType,
        optimistic: true,
    },
});
