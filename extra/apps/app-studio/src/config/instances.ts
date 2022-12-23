import { routes } from './routes';
import { StudioWidgets } from './widgets';

export const instances: IWidgetInstancesByPageList = {
    studio: [
        {
            id: 'overview',
            widgetId: StudioWidgets.Overview,
            position: { y: 1, x: 1 },
            dimension: { y: 48, x: 128 },
            isTransparent: false,
            allowOverflow: false,
        },
        {
            id: 'overviewBar',
            widgetId: StudioWidgets.OverviewBar,
            position: { y: 3, x: 90 },
            dimension: { y: 2, x: 35 },
            isTransparent: false,
        },
        {
            id: 'schedule',
            widgetId: StudioWidgets.Schedule,
            position: { y: 37, x: 3 },
            dimension: { y: 7, x: 16 },
            isTransparent: true,
            allowOverflow: true,
        },

        {
            id: 'notifications',
            widgetId: StudioWidgets.Notifications,
            position: { y: 5, x: 91 },
            dimension: { y: 5, x: 23 },
            isTransparent: true,
            allowOverflow: true,
        },
        {
            id: 'mainDisplay',
            widgetId: StudioWidgets.MainDisplay,
            position: { y: 40, x: 44 },
            dimension: { y: 6, x: 36 },
            isTransparent: true,
            allowOverflow: true,
        },

        {
            id: 'proTip',
            widgetId: StudioWidgets.ProTip,
            position: { y: 34, x: 109 },
            dimension: { y: 12, x: 16 },
            isTransparent: true,
            allowOverflow: true,
        },
        {
            id: 'reader',
            widgetId: StudioWidgets.Reader,
            position: { y: 11, x: 44 },
            dimension: { y: 1, x: 1 },
            isTransparent: true,
            allowOverflow: true,
        },
        {
            id: 'sim',
            widgetId: StudioWidgets.Sims,
            position: { y: 3, x: 23 },
            dimension: { y: 2, x: 22 },
            isTransparent: true,
            allowOverflow: true,
        },
    ],
    overviewNavigate: [
        {
            id: 'overviewNavigate',
            widgetId: StudioWidgets.OverviewNavigate,
            position: { y: 1, x: 10 },
            dimension: { y: 48, x: 88 },
            isTransparent: true,
        },
    ],
    mainDisplay: [
        {
            id: 'MainDisplay',
            widgetId: StudioWidgets.MainDisplay,
            position: { y: 1, x: 10 },
            dimension: { y: 48, x: 88 },
        },
    ],
};
