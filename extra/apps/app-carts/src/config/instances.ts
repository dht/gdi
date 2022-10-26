import { IWidgetInstancesByPageList } from '@gdi/platformer';
import { routes } from './routes';
import { CartsWidgets } from './widgets';

export const instances: IWidgetInstancesByPageList = {
    carts: [
        {
            id: 'Carts',
            widgetId: CartsWidgets.Carts,
            position: { y: 1, x: 10 },
            dimension: { y: 48, x: 88 },
            allowOverflow: false,
        },
    ],
};
