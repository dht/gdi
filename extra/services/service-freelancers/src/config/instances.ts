import { IWidgetInstancesByPageList } from '@gdi/platformer';
import { routes } from './routes';
import { FreelancersWidgets } from './widgets';

export const instances: IWidgetInstancesByPageList = {
    upgrades: [
        {
            id: 'Upgrades',
            widgetId: FreelancersWidgets.Upgrades,
            position: { y: 1, x: 10 },
            dimension: { y: 48, x: 88 },
        },
    ],
};
