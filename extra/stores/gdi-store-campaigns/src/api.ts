export const endpointsConfigOverrides = {
    appStateCampaigns: {
        id: 'appStateCampaigns',
        connectionType: 'NONE',
    },
    campaigns: {
        id: 'campaigns',
        connectionType: 'REST',
        optimistic: true,
    },
};
