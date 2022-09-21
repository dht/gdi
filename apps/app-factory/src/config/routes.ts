import { ROOT } from './ids';

export const routes: IRoutes = {
    layouts: `${ROOT}/layouts`,
    layout: `${ROOT}/layouts/:layoutId`,
    customWidgets: `${ROOT}/customWidgets`,
    customWidget: `${ROOT}/customWidgets/:widgetId`,
    articleEditor: `${ROOT}/articles/:articleId`,
};

export const menuItems: IMenuItem[] = [
    {
        path: routes.layouts,
        icon: 'ViewDashboard',
        label: 'Layouts',
        groupId: 'site',
        order: 1,
    },
    {
        path: routes.customWidgets,
        icon: 'Manufacturing',
        label: 'Custom Widgets',
        groupId: 'site',
        order: 2,
    },
];

export const contextBarItems: IContextBarItem[] = [];

export const commandBarItems: ICommandBarItem[] = [];
