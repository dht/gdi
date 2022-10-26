import { IWidgetInstancesByPageList } from '@gdi/platformer';
import { routes } from './routes';
import { BibloWidgets } from './widgets';

export const instances: IWidgetInstancesByPageList = {
    biblo: [
        {
            id: 'InterestingReads',
            widgetId: BibloWidgets.InterestingReads,
            position: { y: 1, x: 10 },
            dimension: { y: 48, x: 88 },
            allowOverflow: false,
        },
    ],
};
