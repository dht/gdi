import { EndpointsConfigOverrides, ConnectionType } from 'redux-connected';

export const endpointsConfigOverrides = (
    parentConnectionType: ConnectionType
): EndpointsConfigOverrides => {
    let connectionType;

    if (parentConnectionType === ConnectionType.NONE) {
        connectionType = ConnectionType.NONE;
    } else {
        connectionType = ConnectionType.REST;
    }

    return {
        appStateGuidance: {
            id: 'appStateGuidance',
            connectionType: ConnectionType.NONE,
        },
        bmsFeatures: {
            id: 'bmsFeatures',
            connectionType,
            adapterId: 'service-guidance',
        },
        businessDomains: {
            id: 'businessDomains',
            connectionType,
            adapterId: 'service-guidance',
        },
        rankings: {
            id: 'rankings',
            connectionType,
            adapterId: 'service-guidance',
        },
        requirements: {
            id: 'requirements',
            connectionType,
            adapterId: 'service-guidance',
        },
    };
};
