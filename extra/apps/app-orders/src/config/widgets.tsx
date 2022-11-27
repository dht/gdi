import React from 'react';
import { IWidget, Wrapper } from '@gdi/platformer';
import { APP_ID } from './ids';

const OrdersContainer = React.lazy(() => import('../containers/OrdersContainer')); // prettier-ignore
const CouponsContainer = React.lazy(() => import('../containers/CouponsContainer')); // prettier-ignore

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
        component: (props: any) => (
            <Wrapper appId={APP_ID} component={OrdersContainer} props={props} />
        ),
    },
    {
        id: OrdersWidgets.Coupons,
        name: 'Coupons',
        description: 'Coupons',
        defaultDimension: {
            y: 16,
            x: 12,
        },
        component: (props: any) => (
            <Wrapper
                appId={APP_ID}
                component={CouponsContainer}
                props={props}
            />
        ),
    },
];
