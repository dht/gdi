import { IWidgetInstancesByPageList } from '@gdi/platformer';
import { routes } from './routes';
import { LoginWidgets } from './widgets';

export const instances: IWidgetInstancesByPageList = {
    login: [
        {
            id: '11',
            widgetId: LoginWidgets.Login,
            position: { y: 2, x: 3 },
            dimension: { y: 46, x: 128 },
            isTransparent: true,
        },
    ],
};
