import { Card } from './Card-1/Card';
import { widgetInfo as CardInfo } from './Card-1';

export const blocks: IWidgets = {
    'com.usegdi.templates.card.card-1': {
        component: Card,
        ...CardInfo,
    },
};
