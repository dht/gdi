import { EndpointsConfigOverrides, ConnectionType } from 'redux-connected';

export const endpointsConfigOverrides = (
    connectionType: ConnectionType
): EndpointsConfigOverrides => ({
    appStateCampaigns: {
        id: 'appStateCampaigns',
        connectionType: ConnectionType.NONE,
    },
    campaigns: {
        id: 'campaigns',
        connectionType,
        optimistic: true,
    },
});
