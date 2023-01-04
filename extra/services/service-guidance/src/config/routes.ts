import { ROOT } from './ids';

export const routes: IRoutes = {
    guidanceIntro: `${ROOT}/guidance/intro`,
    guidanceRanking: `${ROOT}/guidance/ranking`,
    guidanceBusinessInfo: `${ROOT}/guidance/businessInfo`,
    guidanceFeatures: `${ROOT}/guidance/features`,
};

export const menuItems: IMenuItem[] = [
    {
        path: routes.guidanceIntro,
        icon: 'AssessmentGroup',
        label: 'Guidance',
        groupId: 'services',
        showOnSlim: true,
        order: 0,
    },
];

export const contextBarItems: IContextBarItem[] = [];

export const commandBarItems: ICommandBarItem[] = [];

export const pieMenuItems: Partial<IPieMenuConfigPerItemType> = {};
