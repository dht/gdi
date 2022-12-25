import { ROOT } from './ids';

export const routes: IRoutes = {
    boosters: `${ROOT}/boosters`,
};

export const menuItems: IMenuItem[] = [
    {
        path: routes.boosters,
        icon: 'Color',
        label: 'LevelUp Shop',
        groupId: 'services',
        showOnSlim: false,
        order: 2,
    },
];

export const contextBarItems: IContextBarItem[] = [];

export const commandBarItems: ICommandBarItem[] = [];

export const pieMenuItems: Partial<IPieMenuConfigPerItemType> = {};
