import { EndpointsConfigOverrides, ConnectionType } from 'redux-connected';

export const endpointsConfigOverrides = (
    connectionType: ConnectionType
): EndpointsConfigOverrides => ({
    appStateLeads: {
        id: 'appStateLeads',
        connectionType: ConnectionType.NONE,
    },
    leads: {
        id: 'leads',
        connectionType,
        optimistic: true,
    },
});
