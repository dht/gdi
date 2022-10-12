import { ROOT } from './ids';
import { MixerWidgets } from './widgets';

export const routes: IRoutes = {
    mixer: `${ROOT}/pages/:pageId`,
    pages: `${ROOT}/pages`,
    imageGallery: `${ROOT}/imageGallery`,
    preview_static: `/preview`,
};

export const menuItems: IMenuItem[] = [
    {
        path: routes.pages,
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

export const contextBarItems: IContextBarItem[] = [
    {
        id: 'devtoolsWindowSize',
        label: 'Window Size',
        widgetId: MixerWidgets.WindowSize,
        responsive: false,
    },
];

export const commandBarItems: ICommandBarItem[] = [
    {
        id: 'devtoolsWindowSize',
        label: 'Show Window Size',
        action: {
            type: 'ADD_ITEM_TO_CONTEXT_BAR',
            payload: {
                contextBarItemId: 'devtoolsWindowSize',
            },
        },
        shortKeys: [
            {
                key: '`',
            },
        ],
    },
];
