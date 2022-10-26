import { IWidgetInstancesByPageList } from '@gdi/platformer';
import { MoneyWidgets } from './widgets';

export const instances: IWidgetInstancesByPageList = {
    money: [
        {
            id: '11',
            widgetId: MoneyWidgets.Money,
            position: { y: 1, x: 10 },
            dimension: { y: 48, x: 88 },
        },
    ],
};
