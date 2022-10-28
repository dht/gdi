import { IWidgetInstancesByPageList } from '@gdi/platformer';
import { routes } from './routes';
import { CampaignsWidgets } from './widgets';

export const instances: IWidgetInstancesByPageList = {
    campaigns: [
        {
            id: 'Campaigns',
            widgetId: CampaignsWidgets.Campaigns,
            position: { y: 1, x: 10 },
            dimension: { y: 48, x: 88 },
            allowOverflow: false,
        },
    ],
};
