import { IWidgetInstancesByPageList } from '@gdi/platformer';
import { routes } from './routes';
import { ProductsWidgets } from './widgets';

export const instances: IWidgetInstancesByPageList = {
    products: [
        {
            id: 'Products',
            widgetId: ProductsWidgets.Products,
            position: { y: 1, x: 10 },
            dimension: { y: 48, x: 88 },
            allowOverflow: false,
        },
    ],
};
