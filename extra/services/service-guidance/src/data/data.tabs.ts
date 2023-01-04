type TabData = {
    id: string;
    label: string;
    pathName: string;
};

export const tabs: TabData[] = [
    {
        id: 'intro',
        label: 'Intro',
        pathName: '/admin/services/guidance/intro',
    },
    {
        id: 'ranking',
        label: 'Ranking',
        pathName: '/admin/services/guidance/ranking',
    },
    {
        id: 'category',
        label: 'Category',
        pathName: '/admin/services/guidance/businessInfo',
    },
    {
        id: 'features',
        label: 'Features',
        pathName: '/admin/services/guidance/features',
    },
];
