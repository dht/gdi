import {
    ICommandBarItem,
    IContextBarItem,
    IMenuItem,
    IRoutes,
} from '@gdi/platformer';
import { ROOT } from './ids';

export const routes: IRoutes = {
    leads: `${ROOT}`,
};

export const menuItems: IMenuItem[] = [
    {
        path: routes.leads,
        icon: 'Calories',
        label: 'Leads',
        groupId: 'marketing',
        order: 2,
    },
];

export const contextBarItems: IContextBarItem[] = [];

export const commandBarItems: ICommandBarItem[] = [];

export const pieMenuItems: Partial<IPieMenuConfigPerItemType> = {};
