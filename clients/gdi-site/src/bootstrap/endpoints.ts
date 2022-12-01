import type { EndpointsConfigOverrides } from 'redux-connected';
import { ConnectionType } from 'redux-connected';

export const endpointsConfigOverrides: EndpointsConfigOverrides = {
    palette: {
        id: 'palette',
        connectionType: ConnectionType.FIRESTORE,
        optimistic: true,
    },
    fonts: {
        id: 'fonts',
        connectionType: ConnectionType.FIRESTORE,
        optimistic: true,
    },
    instances: {
        id: 'instances',
        connectionType: ConnectionType.FIRESTORE,
        optimistic: true,
    },
    widgets: {
        id: 'widgets',
        connectionType: ConnectionType.FIRESTORE,
        optimistic: true,
    },
    images: {
        id: 'images',
        connectionType: ConnectionType.FIRESTORE,
        optimistic: true,
    },
    instancesProps: {
        id: 'instancesProps',
        connectionType: ConnectionType.FIRESTORE,
        optimistic: true,
    },
    datasets: {
        id: 'datasets',
        connectionType: ConnectionType.FIRESTORE,
        optimistic: true,
    },
    pages: {
        id: 'pages',
        connectionType: ConnectionType.FIRESTORE,
        optimistic: true,
    },
    pageInstances: {
        id: 'pageInstances',
        connectionType: ConnectionType.FIRESTORE,
        optimistic: true,
    },
};
