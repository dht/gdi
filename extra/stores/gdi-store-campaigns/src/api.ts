export const endpointsConfigOverrides = (connectionType: ConnectionType) => ({
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
