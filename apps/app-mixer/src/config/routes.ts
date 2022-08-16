import {
    ICommandBarItem,
    IContextBarItem,
    IMenuItem,
    IRoutes,
} from '@gdi/platformer';
import { ROOT } from './ids';
import { MixerWidgets } from './widgets';

export const routes: IRoutes = {
    mixer: `${ROOT}`,
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
];

export const contextBarItems: IContextBarItem[] = [
    {
        id: 'reduxConnectedDevtools',
        label: 'Redux connected devtools',
        widgetId: MixerWidgets.PanelContent,
        responsive: false,
    },
];

export const commandBarItems: ICommandBarItem[] = [
    {
        id: 'reduxConnectedDevtools',
        label: 'Show Redux Devtools',
        action: {
            type: 'ADD_ITEM_TO_CONTEXT_BAR',
            payload: {
                contextBarItemId: 'reduxConnectedDevtools',
            },
        },
        shortKeys: [
            {
                key: '`',
            },
        ],
    },
    {
        id: 'houston',
        label: 'Show Houston',
        action: {
            type: 'ADD_ITEM_TO_CONTEXT_BAR',
            payload: {
                contextBarItemId: 'houston',
            },
        },
        shortKeys: [
            {
                key: '\\',
            },
        ],
    },
    {
        id: 'storeSize',
        label: 'Show Store Size',
        action: {
            type: 'ADD_ITEM_TO_CONTEXT_BAR',
            payload: {
                contextBarItemId: 'storeSize',
            },
        },
    },
    {
        id: 'loginCycle',
        label: 'Show Login cycle',
        action: {
            type: 'ADD_ITEM_TO_CONTEXT_BAR',
            payload: {
                contextBarItemId: 'loginCycle',
            },
        },
    },
];
