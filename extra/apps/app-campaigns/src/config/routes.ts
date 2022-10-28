import {
    ICommandBarItem,
    IContextBarItem,
    IMenuItem,
    IRoutes,
} from '@gdi/platformer';
import { ROOT } from './ids';

export const routes: IRoutes = {
    campaigns: `${ROOT}`,
};

export const menuItems: IMenuItem[] = [
    {
        path: routes.campaigns,
        icon: 'Speakers',
        label: 'Campaigns',
        groupId: 'marketing',
        order: 1,
    },
];

export const contextBarItems: IContextBarItem[] = [];

export const commandBarItems: ICommandBarItem[] = [];

export const pieMenuItems: Partial<IPieMenuConfigPerItemType> = {};
