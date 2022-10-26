import { IWidgetInstancesByPageList } from '@gdi/platformer';
import { routes } from './routes';
import { ThingsWidgets } from './widgets';

export const instances: IWidgetInstancesByPageList = {
    things: [
        {
            id: 'Sheets',
            widgetId: ThingsWidgets.Sheets,
            position: { y: 1, x: 10 },
            dimension: { y: 48, x: 88 },
            allowOverflow: false,
        },
    ],
};
