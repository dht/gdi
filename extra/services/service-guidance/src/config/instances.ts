import { IWidgetInstancesByPageList } from '@gdi/platformer';
import { routes } from './routes';
import { GuidanceWidgets } from './widgets';

export const instances: IWidgetInstancesByPageList = {
    guidance: [
        {
            id: 'Guidance',
            widgetId: GuidanceWidgets.Guidance,
            position: { y: 1, x: 10 },
            dimension: { y: 48, x: 88 },
            allowOverflow: false,
        },
    ],
};
