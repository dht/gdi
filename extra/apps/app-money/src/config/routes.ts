import { ROOT } from './ids';

export const routes: IRoutes = {
    money: `${ROOT}`,
};

export const menuItems: IMenuItem[] = [
    {
        path: routes.money,
        icon: 'money',
        label: 'Money',
        groupId: 'doing',
        order: 3,
    },
];

export const contextBarItems: IContextBarItem[] = [];

export const commandBarItems: ICommandBarItem[] = [];

export const pieMenuItems: Partial<IPieMenuConfigPerItemType> = {};
