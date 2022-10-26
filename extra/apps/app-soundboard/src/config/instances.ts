import { IWidgetInstancesByPageList } from '@gdi/platformer';
import { routes } from './routes';
import { SoundboardWidgets } from './widgets';

export const instances: IWidgetInstancesByPageList = {
    soundboard: [
        {
            id: '10',
            widgetId: SoundboardWidgets.ProjectsTable,
            position: {
                y: 5,
                x: 2,
            },
            dimension: {
                y: 40,
                x: 24,
            },
        },
        {
            id: '2',
            widgetId: SoundboardWidgets.Squares,
            position: {
                y: 2,
                x: 27,
            },
            dimension: {
                y: 43,
                x: 50,
            },
        },
        {
            id: '3',
            widgetId: SoundboardWidgets.SoundboardTop,
            position: {
                y: 2,
                x: 2,
            },
            dimension: {
                y: 3,
                x: 24,
            },
            isTransparent: true,
        },
    ],
    schedule: [
        {
            id: '2',
            widgetId: SoundboardWidgets.ScheduleTable,
            position: {
                y: 5,
                x: 2,
            },
            dimension: {
                y: 40,
                x: 79,
            },
            isTransparent: true,
        },
        {
            id: '1',
            widgetId: SoundboardWidgets.ScheduleTop,
            position: {
                y: 2,
                x: 2,
            },
            dimension: {
                y: 3,
                x: 24,
            },
            isTransparent: true,
        },
        {
            id: '2a',
            widgetId: SoundboardWidgets.ScheduleClock,
            position: {
                y: 5,
                x: 60,
            },
            dimension: {
                y: 5,
                x: 12,
            },
            isTransparent: true,
        },
        {
            id: '3',
            widgetId: SoundboardWidgets.Switcher,
            position: { y: 2, x: 18 },
            dimension: { y: 2, x: 16 },
            isTransparent: true,
        },
        {
            id: '4',
            widgetId: SoundboardWidgets.ScheduleCommandBar,
            position: { y: 7, x: 7 },
            dimension: { y: 3, x: 50 },
            allowOverflow: true,
            isTransparent: true,
        },
    ],
};
