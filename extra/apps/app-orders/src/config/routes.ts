import {
    ICommandBarItem,
    IContextBarItem,
    IMenuItem,
    IRoutes,
} from '@gdi/platformer';
import { ROOT } from './ids';

export const routes: IRoutes = {
    orders: `${ROOT}/orders`,
    coupons: `${ROOT}/coupons`,
};

export const menuItems: IMenuItem[] = [
    {
        path: routes.orders,
        icon: 'ActivateOrders',
        label: 'Orders',
        groupId: 'shop',
        order: 2,
    },
    {
        path: routes.coupons,
        icon: 'Coupon',
        label: 'Coupons',
        groupId: 'shop',
        order: 4,
    },
];

export const contextBarItems: IContextBarItem[] = [];

export const commandBarItems: ICommandBarItem[] = [];

export const pieMenuItems: Partial<IPieMenuConfigPerItemType> = {};
