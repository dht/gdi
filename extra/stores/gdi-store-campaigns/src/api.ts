export const endpointsConfigOverrides = (connectionType: ConnectionType) => ({
    appStateCampaigns: {
        id: 'appStateCampaigns',
        connectionType: 'NONE',
    },
    campaigns: {
        id: 'campaigns',
        connectionType,
        optimistic: true,
    },
});
