import { IWidgetInstancesByPageList } from '@gdi/platformer';
import { routes } from './routes';
import { LeadsWidgets } from './widgets';

export const instances: IWidgetInstancesByPageList = {
    leads: [
        {
            id: 'Leads',
            widgetId: LeadsWidgets.Leads,
            position: { y: 1, x: 10 },
            dimension: { y: 48, x: 88 },
            allowOverflow: false,
        },
    ],
};
