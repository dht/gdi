import { IWidgetInstancesByPageList } from '@gdi/platformer';
import { routes } from './routes';
import { KnowledgeWidgets } from './widgets';

export const instances: IWidgetInstancesByPageList = {
    knowledge: [
        {
            id: 'Knowledge',
            widgetId: KnowledgeWidgets.Knowledge,
            position: { y: 1, x: 10 },
            dimension: { y: 48, x: 88 },
            allowOverflow: false,
        },
    ],
};
