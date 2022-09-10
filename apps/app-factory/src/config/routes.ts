import { ROOT } from './ids';

export const routes: IRoutes = {
    factory: `${ROOT}`,
};

export const menuItems: IMenuItem[] = [
    {
        path: routes.factory,
        icon: 'Manufacturing',
        label: 'Factory',
        groupId: 'site',
        showOnSlim: true,
        order: 0,
    },
];

export const contextBarItems: IContextBarItem[] = [];

export const commandBarItems: ICommandBarItem[] = [];
