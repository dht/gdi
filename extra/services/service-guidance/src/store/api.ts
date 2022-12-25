import { EndpointsConfigOverrides, ConnectionType } from 'redux-connected';

export const endpointsConfigOverrides = (
    connectionType: ConnectionType
): EndpointsConfigOverrides => ({
    appStateGuidance: {
        id: 'appStateGuidance',
        connectionType: ConnectionType.NONE,
    },
    requiredDomains: {
        id: 'requiredDomains',
        connectionType: ConnectionType.NONE,
    },
    requiredFeatures: {
        id: 'requiredFeatuers',
        connectionType: ConnectionType.NONE,
    },
    rankedDomains: {
        id: 'rankedDomains',
        connectionType: ConnectionType.NONE,
    },
});
