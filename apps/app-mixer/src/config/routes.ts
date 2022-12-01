import { ROOT } from './ids';
import { MixerWidgets } from './widgets';

export const routes: IRoutes = {
    mixer: `${ROOT}/pages/:pageId`,
    pages: `${ROOT}/pages`,
    imageGallery: `${ROOT}/imageGallery`,
    widgetGallery: `${ROOT}/widgetGallery`,
    datasets: `${ROOT}/datasets`,
    previewFull: `${ROOT}/preview/full`,
    preview: `${ROOT}/preview`,
    zoomBuild: `${ROOT}/zoomBuild/:zoomWidgetId`,
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
    {
        path: routes.widgetGallery,
        icon: 'AddIn',
        label: 'Widget gallery',
        groupId: 'site',
        showOnSlim: true,
        order: 2,
    },
    {
        path: routes.datasets,
        icon: 'DataManagementSettings',
        label: 'Datasets',
        groupId: 'site',
        showOnSlim: true,
        order: 3,
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
        event: {
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

export const pieMenuItems: Partial<IPieMenuConfigPerItemType> = {};
