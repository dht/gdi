import { params } from './meta/BigOne.params';
import { sampleData } from './meta/BigOne.sample';
import { dimensions } from './meta/BigOne.dimensions';
import { screenshots } from './meta/BigOne.screenshots';

export const widgetInfo: IWidget = {
    id: 'com.usegdi.templates.tech.bigOne-basic',
    name: 'bigOne-basic',
    description: '',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-bigOne'],
    dataTags: [],
    widgetType: 'bigOne',
    isBlock: true,
};
