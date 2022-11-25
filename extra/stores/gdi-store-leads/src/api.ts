export const endpointsConfigOverrides = (connectionType: ConnectionType) => ({
    appStateLeads: {
        id: 'appStateLeads',
        connectionType: 'NONE',
    },
    leads: {
        id: 'leads',
        connectionType,
        optimistic: true,
    },
});
