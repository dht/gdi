import { params } from './meta/Quotes.params';
import { sampleData } from './meta/Quotes.sample';
import { dimensions } from './meta/Quotes.dimensions';
import { screenshots } from './meta/Quotes.screenshots';

export const widgetInfo: IWidget = {
    id: 'com.usegdi.templates.starter.quotes-basic',
    name: 'quotes-basic',
    description: '',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-quotes'],
    dataTags: [],
    widgetType: 'quotes',
    isBlock: true,
};
