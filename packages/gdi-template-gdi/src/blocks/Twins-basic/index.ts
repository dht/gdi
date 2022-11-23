import { params } from './meta/Twins.params';
import { sampleData } from './meta/Twins.sample';
import { dimensions } from './meta/Twins.dimensions';
import { screenshots } from './meta/Twins.screenshots';

export const widgetInfo: IWidget = {
    id: 'com.usegdi.templates.gdi.twins-basic',
    name: 'twins-basic',
    description: '',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-twins'],
    dataTags: [],
    widgetType: 'twins',
    isBlock: true,
};
