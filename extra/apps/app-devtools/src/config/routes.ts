import { ROOT } from './ids';
import { DevtoolsWidgets } from './widgets';

export const routes: IRoutes = {
    userDrawer: `${ROOT}/users/:userId`,
    devtoolsDrawer: `${ROOT}/users/:userId`,
    devtoolsModal: `${ROOT}/announcement/:flavour/for/:name`,
    catalog: `${ROOT}/catalog`,
};

export const menuItems: IMenuItem[] = [
    {
        path: routes.catalog,
        icon: 'Diamond',
        label: 'Catalog',
        groupId: 'extra',
        hidden: true,
        order: 8,
    },
];

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
        id: 'houston',
        label: 'Houston',
        widgetId: DevtoolsWidgets.Houston,
        responsive: true,
    },
    {
        id: 'loginCycle',
        label: 'Login cycle',
        widgetId: DevtoolsWidgets.LoginCycle,
        responsive: true,
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
        id: 'loginCycle',
        label: 'Show Login cycle',
        event: {
            type: 'ADD_ITEM_TO_CONTEXT_BAR',
            payload: {
                contextBarItemId: 'devtools_loginCycle',
            },
        },
    },
];

export const pieMenuItems: Partial<IPieMenuConfigPerItemType> = {};
