import { routes } from './routes';
import { DashboardWidgets } from './widgets';

export const instances: IWidgetInstancesByPageList = {
    overview: [
        {
            id: 'overview',
            widgetId: DashboardWidgets.Overview,
            position: { y: 1, x: 10 },
            dimension: { y: 48, x: 88 },
            isTransparent: false,
            isFullPage: true,
            allowOverflow: false,
        },
    ],
    overviewNavigate: [
        {
            id: 'overviewNavigate',
            widgetId: DashboardWidgets.OverviewNavigate,
            position: { y: 1, x: 10 },
            dimension: { y: 48, x: 88 },
            isTransparent: true,
        },
    ],
};
