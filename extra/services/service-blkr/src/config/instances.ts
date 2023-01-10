import { IWidgetInstancesByPageList } from '@gdi/platformer';
import { routes } from './routes';
import { BlkrWidgets } from './widgets';

export const instances: IWidgetInstancesByPageList = {
    blkrGallery: [
        {
            id: 'BlkrGallery',
            widgetId: BlkrWidgets.BlkrGallery,
            position: { y: 1, x: 10 },
            dimension: { y: 48, x: 88 },
            isFullPage: true,
        },
    ],
};
