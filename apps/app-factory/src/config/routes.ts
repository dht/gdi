import { ROOT } from './ids';

export const routes: IRoutes = {
    layouts: `${ROOT}/layouts`,
    layout: `${ROOT}/layouts/:layoutId`,
    articles: `${ROOT}/articles`,
    articleEditor: `${ROOT}/articles/:articleId`,
};

export const menuItems: IMenuItem[] = [
    {
        path: routes.articles,
        icon: 'Documentation',
        label: 'Articles',
        groupId: 'site',
        order: 1,
    },
    {
        path: routes.layouts,
        icon: 'ViewDashboard',
        label: 'Layouts',
        groupId: 'site',
        order: 1.5,
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
