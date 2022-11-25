export const endpointsConfigOverrides = (connectionType: ConnectionType) => ({
    appStateOrders: {
        id: 'appStateOrders',
        connectionType: 'NONE',
    },
    orders: {
        id: 'orders',
        connectionType,
        optimistic: true,
    },
    orderJournals: {
        id: 'orderJournals',
        connectionType,
        optimistic: true,
    },
    coupons: {
        id: 'coupons',
        connectionType,
        optimistic: true,
    },
});
