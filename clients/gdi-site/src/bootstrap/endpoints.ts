import type { EndpointsConfigOverrides } from 'redux-connected';
import { ConnectionType } from 'redux-connected';

export const endpointsConfigOverrides: EndpointsConfigOverrides = {
    meta: {
        id: 'instances',
        connectionType: ConnectionType.FIRESTORE,
        optimistic: true,
    },
    palette: {
        id: 'palette',
        connectionType: ConnectionType.FIRESTORE,
        optimistic: true,
    },
    fontSizes: {
        id: 'fontSizes',
        connectionType: ConnectionType.FIRESTORE,
        optimistic: true,
    },
    spacing: {
        id: 'spacing',
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
    instancesMapColors: {
        id: 'instancesMapColors',
        connectionType: ConnectionType.FIRESTORE,
        optimistic: true,
    },
    instancesMapStrings: {
        id: 'instancesMapStrings',
        connectionType: ConnectionType.FIRESTORE,
        optimistic: true,
    },
    instancesProps: {
        id: 'instancesProps',
        connectionType: ConnectionType.FIRESTORE,
        optimistic: true,
    },
    strings: {
        id: 'strings',
        connectionType: ConnectionType.FIRESTORE,
        optimistic: true,
    },
};
