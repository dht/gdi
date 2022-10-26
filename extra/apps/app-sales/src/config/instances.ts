import { IWidgetInstancesByPageList } from '@gdi/platformer';
import { routes } from './routes';
import { SalesWidgets } from './widgets';

export const instances: IWidgetInstancesByPageList = {
    sales: [
        {
            id: 'Sales',
            widgetId: SalesWidgets.Sales,
            position: { y: 1, x: 10 },
            dimension: { y: 48, x: 88 },
            allowOverflow: false,
        },
    ],
};
