import { params } from './meta/Features.params';
import { sampleData } from './meta/Features.sample';
import { dimensions } from './meta/Features.dimensions';
import { screenshots } from './meta/Features.screenshots';

export const widgetInfo: IWidget = {
    id: 'com.usegdi.templates.gdi.features-basic',
    name: 'features-basic',
    description: '',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-features'],
    dataTags: [],
    widgetType: 'features',
    isBlock: true,
};
