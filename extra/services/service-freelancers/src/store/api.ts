import { EndpointsConfigOverrides, ConnectionType } from 'redux-connected';

export const endpointsConfigOverrides = (
    _connectionType: ConnectionType
): EndpointsConfigOverrides => ({
    appStateFreelancer: {
        id: 'appStateFreelancer',
        connectionType: ConnectionType.NONE,
    },
    upgrades: {
        id: 'upgrades',
        connectionType: ConnectionType.NONE,
    },
    upgradeCategories: {
        id: 'upgradeCategories',
        connectionType: ConnectionType.NONE,
    },
});
