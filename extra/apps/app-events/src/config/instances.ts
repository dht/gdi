import { IWidgetInstancesByPageList } from '@gdi/platformer';
import { routes } from './routes';
import { EventsWidgets } from './widgets';

export const instances: IWidgetInstancesByPageList = {
    events: [
        {
            id: 'Events',
            widgetId: EventsWidgets.Events,
            position: { y: 1, x: 10 },
            dimension: { y: 48, x: 88 },
            allowOverflow: false,
        },
    ],
    reminders: [
        {
            id: 'Reminders',
            widgetId: EventsWidgets.Reminders,
            position: { y: 1, x: 10 },
            dimension: { y: 48, x: 88 },
            allowOverflow: false,
        },
    ],
};
