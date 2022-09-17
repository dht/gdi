import { ROOT } from './ids';

export const routes: IRoutes = {
    layouts: `${ROOT}/layouts`,
    layout: `${ROOT}/layouts/:layoutId`,
    customBlocks: `${ROOT}/customBlocks`,
    customBlock: `${ROOT}/customBlocks/:blockId`,
};

export const menuItems: IMenuItem[] = [
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
