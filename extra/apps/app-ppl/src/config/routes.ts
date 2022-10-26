import {
    ICommandBarItem,
    IContextBarItem,
    IMenuItem,
    IRoutes,
} from '@gdi/platformer';
import { ROOT } from './ids';

export const routes: IRoutes = {
    ppl: `${ROOT}`,
};

export const menuItems: IMenuItem[] = [
    {
        path: routes.ppl,
        icon: 'AutoEnhanceOn',
        label: 'People',
        groupId: 'doing',
        order: 2,
    },
];

export const contextBarItems: IContextBarItem[] = [];

export const commandBarItems: ICommandBarItem[] = [];

export const pieMenuItems: Partial<IPieMenuConfigPerItemType> = {};
