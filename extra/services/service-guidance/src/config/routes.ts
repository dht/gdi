import { ROOT } from './ids';

export const routes: IRoutes = {
    guidance: `${ROOT}/guidance`,
};

export const menuItems: IMenuItem[] = [
    {
        path: routes.guidance,
        icon: 'Color',
        label: 'Guidance',
        groupId: 'services',
        showOnSlim: false,
        order: 0,
    },
];

export const contextBarItems: IContextBarItem[] = [];

export const commandBarItems: ICommandBarItem[] = [];

export const pieMenuItems: Partial<IPieMenuConfigPerItemType> = {};
