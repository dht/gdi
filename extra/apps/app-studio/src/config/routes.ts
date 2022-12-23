import { ROOT } from './ids';

export const routes: IRoutes = {
    studio: `${ROOT}/studio`,
    overviewNavigate: `${ROOT}/overview/:inboxMessageId`,
};

export const menuItems: IMenuItem[] = [
    {
        path: routes.studio,
        icon: 'SearchNearby',
        label: 'Studio',
        groupId: 'doing',
        showOnSlim: true,
        order: 0.5,
    },
];

export const contextBarItems: IContextBarItem[] = [];

export const commandBarItems: ICommandBarItem[] = [];

export const pieMenuItems: Partial<IPieMenuConfigPerItemType> = {};
