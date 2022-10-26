import {
    ICommandBarItem,
    IContextBarItem,
    IMenuItem,
    IRoutes,
} from '@gdi/platformer';
import { ROOT } from './ids';

export const routes: IRoutes = {
    biblo: `${ROOT}`,
};

export const menuItems: IMenuItem[] = [
    {
        path: routes.biblo,
        icon: 'Diamond',
        label: 'Interesting reads',
        groupId: 'extra',
        order: 3,
    },
];

export const contextBarItems: IContextBarItem[] = [];

export const commandBarItems: ICommandBarItem[] = [];

export const pieMenuItems: Partial<IPieMenuConfigPerItemType> = {};
