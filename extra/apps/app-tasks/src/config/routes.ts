import {
    ICommandBarItem,
    IContextBarItem,
    IMenuItem,
    IRoutes,
} from '@gdi/platformer';
import { ROOT } from './ids';

export const routes: IRoutes = {
    tasks: `${ROOT}`,
    projects: '/admin/projects',
};

export const menuItems: IMenuItem[] = [
    {
        path: routes.tasks,
        icon: 'CubeShape',
        label: 'Tasks',
        groupId: 'doing',
        showOnSlim: true,
        order: 4,
    },
    {
        path: routes.projects,
        icon: 'AppIconDefault',
        label: 'Projects',
        groupId: 'doing',
        showOnSlim: false,
        order: 5,
    },
];

export const contextBarItems: IContextBarItem[] = [];

export const commandBarItems: ICommandBarItem[] = [];

export const pieMenuItems: Partial<IPieMenuConfigPerItemType> = {};
