import { ROOT } from './ids';

export const routes: IRoutes = {
    mixer: `${ROOT}`,
    imageGallery: `${ROOT}/imageGallery`,
    preview_static: `/preview`,
};

export const menuItems: IMenuItem[] = [
    {
        path: routes.mixer,
        icon: 'Color',
        label: 'Mixer',
        groupId: 'site',
        showOnSlim: true,
        order: 0,
    },
    {
        path: routes.imageGallery,
        icon: 'ImageSearch',
        label: 'Image gallery',
        groupId: 'site',
        showOnSlim: true,
        order: 1,
    },
];

export const contextBarItems: IContextBarItem[] = [];

export const commandBarItems: ICommandBarItem[] = [];
