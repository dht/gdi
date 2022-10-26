import {
    ICommandBarItem,
    IContextBarItem,
    IMenuItem,
    IRoutes,
} from '@gdi/platformer';
import { ROOT } from './ids';

export const routes: IRoutes = {
    sales: `${ROOT}`,
};

export const menuItems: IMenuItem[] = [
    {
        path: routes.sales,
        icon: 'Calories',
        label: 'Sales',
        groupId: 'doing',
        order: 1.5,
    },
];

export const contextBarItems: IContextBarItem[] = [];

export const commandBarItems: ICommandBarItem[] = [];

export const pieMenuItems: Partial<IPieMenuConfigPerItemType> = {};
