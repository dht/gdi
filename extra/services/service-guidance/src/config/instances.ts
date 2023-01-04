import { IWidgetInstancesByPageList } from '@gdi/platformer';
import { routes } from './routes';
import { GuidanceWidgets } from './widgets';

export const instances: IWidgetInstancesByPageList = {
    guidanceFeatures: [
        {
            id: 'GuidanceFeatures',
            widgetId: GuidanceWidgets.GuidanceFeatures,
            position: { y: 1, x: 10 },
            dimension: { y: 48, x: 88 },
        },
    ],
    guidanceIntro: [
        {
            id: 'GuidanceIntro',
            widgetId: GuidanceWidgets.GuidanceIntro,
            position: { y: 1, x: 10 },
            dimension: { y: 48, x: 88 },
        },
    ],
    guidanceRanking: [
        {
            id: 'GuidanceRanking',
            widgetId: GuidanceWidgets.GuidanceRanking,
            position: { y: 1, x: 10 },
            dimension: { y: 48, x: 88 },
        },
    ],
    guidanceBusinessInfo: [
        {
            id: 'GuidanceBusinessInfo',
            widgetId: GuidanceWidgets.GuidanceBusinessInfo,
            position: { y: 1, x: 10 },
            dimension: { y: 48, x: 88 },
        },
    ]
};
