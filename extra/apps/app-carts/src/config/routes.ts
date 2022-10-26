import {
    ICommandBarItem,
    IContextBarItem,
    IMenuItem,
    IRoutes,
} from '@gdi/platformer';
import { ROOT } from './ids';

export const routes: IRoutes = {
    carts: `${ROOT}`,
};

export const menuItems: IMenuItem[] = [
    {
        path: routes.carts,
        icon: 'ShoppingCart',
        label: 'Carts',
        groupId: 'shop',
        order: 3,
    },
];

export const contextBarItems: IContextBarItem[] = [];

export const commandBarItems: ICommandBarItem[] = [];

export const pieMenuItems: Partial<IPieMenuConfigPerItemType> = {};
