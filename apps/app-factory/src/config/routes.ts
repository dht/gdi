import { ROOT } from './ids';

export const routes: IRoutes = {
    factory: `${ROOT}`,
    layouts: `${ROOT}/layouts`,
    customBlocks: `${ROOT}/customBlocks`,
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
    {
        path: routes.layouts,
        icon: 'Manufacturing',
        label: 'Layouts',
        groupId: 'site',
        showOnSlim: true,
        order: 1,
    },
    {
        path: routes.customBlocks,
        icon: 'Manufacturing',
        label: 'CustomBlocks',
        groupId: 'site',
        showOnSlim: true,
        order: 2,
    },
];

export const contextBarItems: IContextBarItem[] = [];

export const commandBarItems: ICommandBarItem[] = [];
