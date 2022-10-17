import { ROOT } from './ids';

export const routes: IRoutes = {
    overview: `${ROOT}/overview`,
};

export const menuItems: IMenuItem[] = [
    {
        path: routes.overview,
        icon: 'SearchNearby',
        label: 'Overview',
        groupId: 'doing',
        showOnSlim: true,
        order: 0,
    },
];

export const contextBarItems: IContextBarItem[] = [];

export const commandBarItems: ICommandBarItem[] = [];
