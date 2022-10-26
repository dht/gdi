import {
    ICommandBarItem,
    IContextBarItem,
    IMenuItem,
    IRoutes,
} from '@gdi/platformer';
import { ROOT } from './ids';

export const routes: IRoutes = {
    soundboard: `${ROOT}`,
    schedule: `${ROOT}/schedule`,
};

export const menuItems: IMenuItem[] = [
    {
        path: routes.soundboard,
        icon: 'BeerMug',
        label: 'Soundboard',
        groupId: 'extra',
        order: 2,
    },
    {
        path: routes.schedule,
        icon: 'Calendar',
        label: 'Schedule',
        groupId: 'doing',
        order: 3.5,
    },
];

export const contextBarItems: IContextBarItem[] = [];

export const commandBarItems: ICommandBarItem[] = [];

export const pieMenuItems: Partial<IPieMenuConfigPerItemType> = {};
