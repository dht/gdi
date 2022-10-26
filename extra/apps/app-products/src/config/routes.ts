import {
    ICommandBarItem,
    IContextBarItem,
    IMenuItem,
    IRoutes,
} from '@gdi/platformer';
import { ROOT } from './ids';

export const routes: IRoutes = {
    products: `${ROOT}`,
};

export const menuItems: IMenuItem[] = [
    {
        path: routes.products,
        icon: 'Product',
        label: 'Products',
        groupId: 'shop',
        order: 1,
    },
];

export const contextBarItems: IContextBarItem[] = [];

export const commandBarItems: ICommandBarItem[] = [];

export const pieMenuItems: Partial<IPieMenuConfigPerItemType> = {};
