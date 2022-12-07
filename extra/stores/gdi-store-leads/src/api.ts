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
