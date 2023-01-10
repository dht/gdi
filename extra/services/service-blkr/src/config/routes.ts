import { ROOT } from './ids';

export const routes: IRoutes = {
    blkrGallery: `${ROOT}/blkrGallery`,
};

export const menuItems: IMenuItem[] = [
    {
        path: routes.blkrGallery,
        icon: 'MapLayers',
        label: 'Browse Blkr',
        groupId: 'services',
        showOnSlim: true,
        order: 3,
    },
];

export const contextBarItems: IContextBarItem[] = [];

export const commandBarItems: ICommandBarItem[] = [];

export const pieMenuItems: Partial<IPieMenuConfigPerItemType> = {};
