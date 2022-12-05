import { routes } from './routes';
import { VilleWidgets } from './widgets';

export const instances: IWidgetInstancesByPageList = {
    ville: [
        {
            id: 'overview',
            widgetId: VilleWidgets.Overview,
            position: { y: 1, x: 1 },
            dimension: { y: 48, x: 128 },
            isTransparent: false,
            allowOverflow: false,
        },
        {
            id: 'overviewBar',
            widgetId: VilleWidgets.OverviewBar,
            position: { y: 3, x: 90 },
            dimension: { y: 2, x: 35 },
            isTransparent: false,
        },
        {
            id: '6',
            widgetId: VilleWidgets.Schedule,
            position: { y: 37, x: 3 },
            dimension: { y: 7, x: 16 },
            isTransparent: true,
            allowOverflow: true,
        },

        {
            id: '13',
            widgetId: VilleWidgets.Notifications,
            position: { y: 5, x: 91 },
            dimension: { y: 5, x: 23 },
            isTransparent: true,
            allowOverflow: true,
        },
        {
            id: '16',
            widgetId: VilleWidgets.MainDisplay,
            position: { y: 40, x: 44 },
            dimension: { y: 6, x: 36 },
            isTransparent: true,
            allowOverflow: true,
        },

        {
            id: '18',
            widgetId: VilleWidgets.ProTip,
            position: { y: 34, x: 109 },
            dimension: { y: 12, x: 16 },
            isTransparent: true,
            allowOverflow: true,
        },
        {
            id: 'Reader',
            widgetId: VilleWidgets.Reader,
            position: { y: 11, x: 44 },
            dimension: { y: 1, x: 1 },
            isTransparent: true,
            allowOverflow: true,
        },
        {
            id: '5',
            widgetId: VilleWidgets.Sims,
            position: { y: 15, x: 5 },
            dimension: { y: 10, x: 12 },
            isTransparent: true,
            allowOverflow: true,
        },
    ],
    overviewNavigate: [
        {
            id: 'overviewNavigate',
            widgetId: VilleWidgets.OverviewNavigate,
            position: { y: 1, x: 10 },
            dimension: { y: 48, x: 88 },
            isTransparent: true,
        },
    ],
    mainDisplay: [
        {
            id: 'MainDisplay',
            widgetId: VilleWidgets.MainDisplay,
            position: { y: 1, x: 10 },
            dimension: { y: 48, x: 88 },
        },
    ],
};
