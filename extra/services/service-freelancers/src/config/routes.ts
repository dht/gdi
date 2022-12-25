import { ROOT } from './ids';

export const routes: IRoutes = {
    upgrades: `${ROOT}/upgrades`,
    freelancers: `${ROOT}`,
};

export const menuItems: IMenuItem[] = [
    {
        path: routes.upgrades,
        icon: 'Color',
        label: 'Freelancers',
        groupId: 'services',
        showOnSlim: false,
        order: 1,
    },
];

export const contextBarItems: IContextBarItem[] = [];

export const commandBarItems: ICommandBarItem[] = [];

export const pieMenuItems: Partial<IPieMenuConfigPerItemType> = {};
