import { ROOT } from './ids';

export const routes: IRoutes = {
    overview: `${ROOT}/overview`,
    overviewNavigate: `${ROOT}/overview/:inboxMessageId`,
};

export const menuItems: IMenuItem[] = [
    {
        path: routes.overview,
        icon: 'InboxCheck',
        label: 'Inbox',
        groupId: 'doing',
        showOnSlim: true,
        order: 0.5,
    },
];

export const contextBarItems: IContextBarItem[] = [];

export const commandBarItems: ICommandBarItem[] = [];

export const pieMenuItems: Partial<IPieMenuConfigPerItemType> = {};
