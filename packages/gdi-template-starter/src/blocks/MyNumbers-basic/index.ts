import { params } from './meta/MyNumbers.params';
import { sampleData } from './meta/MyNumbers.sample';
import { dimensions } from './meta/MyNumbers.dimensions';
import { screenshots } from './meta/MyNumbers.screenshots';

export const widgetInfo: IWidget = {
    id: 'com.usegdi.templates.starter.myNumbers-basic',
    name: 'myNumbers-basic',
    description: '',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-myNumbers'],
    dataTags: [],
    widgetType: 'myNumbers',
    isBlock: true,
};
