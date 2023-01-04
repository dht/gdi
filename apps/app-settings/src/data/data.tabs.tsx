type TabData = {
    id: string;
    label: string;
    pathName: string;
};

export const tabs: TabData[] = [
    {
        id: 'account',
        label: 'Account',
        pathName: '/admin/account',
    },
    {
        id: 'activeApps',
        label: 'Apps',
        pathName: '/admin/apps',
    },
    {
        id: 'activeServices',
        label: 'Services',
        pathName: '/admin/services',
    },
];
