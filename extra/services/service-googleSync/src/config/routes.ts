import { ROOT } from './ids';

export const routes: IRoutes = {
    syncConfig: `${ROOT}/syncConfig`,
};

export const menuItems: IMenuItem[] = [
    {
        path: routes.syncConfig,
        icon: 'SchoolDataSyncLogo',
        label: 'SyncConfig',
        groupId: 'services',
        showOnSlim: true,
        order: 0,
    },
];

export const contextBarItems: IContextBarItem[] = [];

export const commandBarItems: ICommandBarItem[] = [];

export const pieMenuItems: Partial<IPieMenuConfigPerItemType> = {};
