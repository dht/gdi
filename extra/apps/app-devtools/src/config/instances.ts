import { IWidgetInstancesByPageList } from '@gdi/platformer';
import { routes } from './routes';
import { DevtoolsWidgets } from './widgets';

export const instances: IWidgetInstancesByPageList = {
    devtools: [],
    console: [
        {
            id: 'Console',
            widgetId: DevtoolsWidgets.Console,
            position: { y: 1, x: 10 },
            dimension: { y: 48, x: 88 },
        },
    ],
};
