import { IWidgetInstancesByPageList } from '@gdi/platformer';
import { routes } from './routes';
import { LevelUpWidgets } from './widgets';

export const instances: IWidgetInstancesByPageList = {
    boosters: [
        {
            id: 'Boosters',
            widgetId: LevelUpWidgets.Boosters,
            position: { y: 1, x: 10 },
            dimension: { y: 48, x: 88 },
        },
    ],
};
