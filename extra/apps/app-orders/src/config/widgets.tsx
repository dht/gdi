import React from 'react';
import { IWidget } from '@gdi/platformer';
import { OrdersContainer } from '../containers/OrdersContainer';
import { CouponsContainer } from '../containers/CouponsContainer';

export enum OrdersWidgets {
    Orders = 'orders.Orders',
    Coupons = 'orders.Coupons',
}
export const widgets: IWidget[] = [
    {
        id: OrdersWidgets.Orders,
        name: 'Orders',
        description: 'Orders',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => <OrdersContainer {...props} />,
    },
    {
        id: OrdersWidgets.Coupons,
        name: 'Coupons',
        description: 'Coupons',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => <CouponsContainer {...props} />,
    },
];
