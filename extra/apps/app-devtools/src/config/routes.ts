import { ROOT } from './ids';
import { DevtoolsWidgets } from './widgets';

export const routes: IRoutes = {
    userDrawer: `${ROOT}/users/:userId`,
    devtoolsDrawer: `${ROOT}/users/:userId`,
    devtoolsModal: `${ROOT}/announcement/:flavour/for/:name`,
};

export const menuItems: IMenuItem[] = [];

export const contextBarItems: IContextBarItem[] = [
    {
        id: 'reduxConnectedDevtools',
        label: 'Redux connected devtools',
        widgetId: DevtoolsWidgets.ReduxConnectedDevtools,
        responsive: false,
    },
    {
        id: 'storeSize',
        label: 'Store size',
        widgetId: DevtoolsWidgets.StoreSize,
        responsive: true,
    },
    {
        id: 'loginCycle',
        label: 'Login cycle',
        widgetId: DevtoolsWidgets.LoginCycle,
        responsive: true,
    },
    {
        id: 'console',
        label: 'Console',
        widgetId: DevtoolsWidgets.Console,
        responsive: true,
    },
    {
        id: 'localDataViewer',
        label: 'LocalData Viewer',
        widgetId: DevtoolsWidgets.LocalDataViewer,
        responsive: true,
    },
    {
        id: 'devLogs',
        label: 'DevLogs Viewer',
        widgetId: DevtoolsWidgets.DevLogsViewer,
        responsive: true,
        showOnStart: true,
    },
];

export const commandBarItems: ICommandBarItem[] = [
    {
        id: 'reduxConnectedDevtools',
        label: 'Show Redux Devtools',
        event: {
            type: 'ADD_ITEM_TO_CONTEXT_BAR',
            payload: {
                contextBarItemId: 'devtools_reduxConnectedDevtools',
            },
        },
        shortKeys: [
            {
                key: '`',
                withCtrl: true,
            },
        ],
    },
    {
        id: 'console',
        label: 'Show Console',
        event: {
            type: 'ADD_ITEM_TO_CONTEXT_BAR',
            payload: {
                contextBarItemId: 'devtools_console',
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
        event: {
            type: 'ADD_ITEM_TO_CONTEXT_BAR',
            payload: {
                contextBarItemId: 'devtools_houston',
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
        event: {
            type: 'ADD_ITEM_TO_CONTEXT_BAR',
            payload: {
                contextBarItemId: 'devtools_storeSize',
            },
        },
    },
    {
        id: 'localDataViewer',
        label: 'Show Local Data Viewer',
        event: {
            type: 'ADD_ITEM_TO_CONTEXT_BAR',
            payload: {
                contextBarItemId: 'devtools_localDataViewer',
            },
        },
    },
    {
        id: 'loginCycle',
        label: 'Show Login cycle',
        event: {
            type: 'ADD_ITEM_TO_CONTEXT_BAR',
            payload: {
                contextBarItemId: 'devtools_loginCycle',
            },
        },
    },
    {
        id: 'devLogs',
        label: 'Show DevLogs Viewer',
        event: {
            type: 'ADD_ITEM_TO_CONTEXT_BAR',
            payload: {
                contextBarItemId: 'devtools_devLogs',
            },
        },
    },
];

export const pieMenuItems: Partial<IPieMenuConfigPerItemType> = {};
