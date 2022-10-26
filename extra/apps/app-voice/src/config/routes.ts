import {
    ICommandBarItem,
    IContextBarItem,
    IMenuItem,
    IRoutes,
} from '@gdi/platformer';
import { ROOT } from './ids';

export const routes: IRoutes = {
    voice: `${ROOT}`,
};

export const menuItems: IMenuItem[] = [
    {
        path: routes.voice,
        icon: 'Microphone',
        label: 'Voice',
        groupId: 'extra',
        order: 4,
    },
];

export const contextBarItems: IContextBarItem[] = [];

export const commandBarItems: ICommandBarItem[] = [];

export const pieMenuItems: Partial<IPieMenuConfigPerItemType> = {};
