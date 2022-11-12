export const endpointsConfigOverrides = {
    appStateOrders: {
        id: 'appStateOrders',
        connectionType: 'NONE',
    },
    orders: {
        id: 'orders',
        connectionType: 'FIRESTORE',
        optimistic: true,
    },
    orderJournals: {
        id: 'orderJournals',
        connectionType: 'FIRESTORE',
        optimistic: true,
    },
    coupons: {
        id: 'coupons',
        connectionType: 'FIRESTORE',
        optimistic: true,
    },
};
