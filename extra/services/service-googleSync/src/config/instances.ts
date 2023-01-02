import { IWidgetInstancesByPageList } from '@gdi/platformer';
import { routes } from './routes';
import { GoogleSyncWidgets } from './widgets';

export const instances: IWidgetInstancesByPageList = {
    syncConfig: [
        {
            id: 'SyncConfig',
            widgetId: GoogleSyncWidgets.SyncConfig,
            position: { y: 1, x: 10 },
            dimension: { y: 48, x: 88 },
        },
    ],
};
