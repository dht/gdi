export const endpointsConfigOverrides = {
    appStateLeads: {
        id: 'appStateLeads',
        connectionType: 'NONE',
    },
    leads: {
        id: 'leads',
        connectionType: 'FIRESTORE',
        optimistic: true,
    },
};
