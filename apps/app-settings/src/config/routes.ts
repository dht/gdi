import { ROOT } from './ids';

export const routes: IRoutes = {
    account: '/account',
    activeApps: '/apps',
    settings: '/settings',
    siteProperties: '/siteProperties',
};

export const menuItems: IMenuItem[] = [
    {
        path: routes.siteProperties,
        icon: 'DataManagementSettings',
        label: 'Site Properties',
        groupId: 'site',
        order: 8,
    },
];

export const contextBarItems: IContextBarItem[] = [];

export const commandBarItems: ICommandBarItem[] = [];
