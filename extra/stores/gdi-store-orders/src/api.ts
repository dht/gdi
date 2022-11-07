export const endpointsConfigOverrides = {
    appStateOrders: {
        id: 'appStateOrders',
        connectionType: 'NONE',
    },
    orders: {
        id: 'orders',
        connectionType: 'REST',
        optimistic: true,
    },
    orderJournals: {
        id: 'orderJournals',
        connectionType: 'REST',
        optimistic: true,
    },
    coupons: {
        id: 'coupons',
        connectionType: 'REST',
        optimistic: true,
    },
};
