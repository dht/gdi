import { params } from './meta/Card.params';
import { sampleData } from './meta/Card.sample';
import { dimensions } from './meta/Card.dimensions';
import { screenshots } from './meta/Card.screenshots';

export const widgetInfo: IWidget = {
    id: 'com.usegdi.templates.gdi.card-basic',
    name: 'card-basic',
    description: '',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-card'],
    dataTags: [],
    widgetType: 'card',
    isBlock: true,
};
