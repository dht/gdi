import { IWidgetInstancesByPageList } from '@gdi/platformer';
import { routes } from './routes';
import { OrdersWidgets } from './widgets';

export const instances: IWidgetInstancesByPageList = {
    orders: [
        {
            id: 'Orders',
            widgetId: OrdersWidgets.Orders,
            position: { y: 1, x: 10 },
            dimension: { y: 48, x: 88 },
            allowOverflow: false,
        },
    ],
    coupons: [
        {
            id: 'Coupons',
            widgetId: OrdersWidgets.Coupons,
            position: { y: 1, x: 10 },
            dimension: { y: 48, x: 88 },
            allowOverflow: false,
        },
    ],
};
