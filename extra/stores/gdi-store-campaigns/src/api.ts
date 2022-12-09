export enum ConnectionType {
    NONE = 'NONE',
    REST = 'REST',
    FIRESTORE = 'FIRESTORE',
    LOCAL_STORAGE = 'LOCAL_STORAGE',
}

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
