export enum ConnectionType {
    NONE = 'NONE',
    REST = 'REST',
    FIRESTORE = 'FIRESTORE',
    LOCAL_STORAGE = 'LOCAL_STORAGE',
}

export const endpointsConfigOverrides = (connectionType: ConnectionType) => ({
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
