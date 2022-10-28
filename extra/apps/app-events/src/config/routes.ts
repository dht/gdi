import {
    ICommandBarItem,
    IContextBarItem,
    IMenuItem,
    IRoutes,
} from '@gdi/platformer';
import { ROOT } from './ids';

export const routes: IRoutes = {
    events: `${ROOT}`,
    reminders: '/admin/reminders',
};

export const menuItems: IMenuItem[] = [
    {
        path: routes.events,
        icon: 'Calendar',
        label: 'Events',
        groupId: 'extra',
        order: 0,
    },
    {
        path: routes.reminders,
        icon: 'AlarmClock',
        label: 'Reminders',
        groupId: 'extra',
        order: 0,
    },
];

export const contextBarItems: IContextBarItem[] = [];

export const commandBarItems: ICommandBarItem[] = [];

export const pieMenuItems: Partial<IPieMenuConfigPerItemType> = {};
