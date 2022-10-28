import {
    ICommandBarItem,
    IContextBarItem,
    IMenuItem,
    IRoutes,
} from '@gdi/platformer';
import { ROOT } from './ids';

export const routes: IRoutes = {
    things: `${ROOT}`,
};

export const menuItems: IMenuItem[] = [
    {
        path: routes.things,
        icon: 'Sunny',
        label: 'Things',
        groupId: 'extra',
        order: 4,
    },
];

export const contextBarItems: IContextBarItem[] = [];

export const commandBarItems: ICommandBarItem[] = [];

export const pieMenuItems: Partial<IPieMenuConfigPerItemType> = {};
