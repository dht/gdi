import { IWidgetInstancesByPageList } from '@gdi/platformer';
import { routes } from './routes';
import { DevtoolsWidgets } from './widgets';

export const instances: IWidgetInstancesByPageList = {
    devtools: [],
    catalog: [
        {
            id: '1',
            widgetId: DevtoolsWidgets.Catalog,
            position: { y: 2, x: 3 },
            dimension: { y: 46, x: 128 },
            isTransparent: true,
            isFullPage: true,
        },
    ],
};
