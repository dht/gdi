import { IWidgetInstancesByPageList } from '@gdi/platformer';
import { TasksWidgets } from './widgets';

export const instances: IWidgetInstancesByPageList = {
    tasks: [
        {
            id: 'Tickets',
            widgetId: TasksWidgets.Tickets,
            position: { y: 1, x: 10 },
            dimension: { y: 48, x: 88 },
            isTransparent: false,
            allowOverflow: false,
        },
        {
            id: 'ProjectSwitch',
            widgetId: TasksWidgets.ProjectSwitch,
            position: { y: 4, x: 100 },
            dimension: { y: 1, x: 1 },
            isTransparent: false,
            allowOverflow: true,
            isFloating: true,
        },
    ],
    projects: [
        {
            id: 'Projects',
            widgetId: TasksWidgets.Projects,
            position: { y: 1, x: 10 },
            dimension: { y: 48, x: 88 },
            isTransparent: false,
            allowOverflow: false,
        },
    ],
};
