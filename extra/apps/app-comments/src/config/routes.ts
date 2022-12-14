import {
    ICommandBarItem,
    IContextBarItem,
    IMenuItem,
    IRoutes,
} from '@gdi/platformer';
import { ROOT } from './ids';

export const routes: IRoutes = {
    comments: `${ROOT}`,
};

export const menuItems: IMenuItem[] = [
    {
        path: routes.comments,
        icon: 'Comment',
        label: 'Comments',
        groupId: 'site',
        order: 1.5,
    },
];

export const contextBarItems: IContextBarItem[] = [];

export const commandBarItems: ICommandBarItem[] = [];

export const pieMenuItems: Partial<IPieMenuConfigPerItemType> = {};
