export const endpointsConfigOverrides = {
    appStateOrders: {
        id: 'appStateOrders',
        connectionType: 'FIRESTORE',
        optimistic: true,
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
