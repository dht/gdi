import { TabData } from './SettingsTab';

export const tabs: TabData[] = [
    {
        id: 'account',
        label: 'Account',
        pathName: '/admin/account',
    },
    {
        id: 'activeApps',
        label: 'Active Apps',
        pathName: '/admin/apps',
    },
    {
        id: 'activeServices',
        label: 'Services',
        pathName: '/admin/services',
    },
];
