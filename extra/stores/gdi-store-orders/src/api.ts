import { EndpointsConfigOverrides, ConnectionType } from 'redux-connected';

export const endpointsConfigOverrides = (
    connectionType: ConnectionType
): EndpointsConfigOverrides => ({
    appStateOrders: {
        id: 'appStateOrders',
        connectionType: ConnectionType.NONE,
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
