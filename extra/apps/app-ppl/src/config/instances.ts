import { IWidgetInstancesByPageList } from '@gdi/platformer';
import { routes } from './routes';
import { PplWidgets } from './widgets';

export const instances: IWidgetInstancesByPageList = {
    ppl: [
        {
            id: '11',
            widgetId: PplWidgets.Ppl,
            position: { y: 1, x: 10 },
            dimension: { y: 48, x: 88 },
            isTransparent: false,
        },
    ],
};
