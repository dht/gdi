import { params } from './meta/PageTemplate.params';
import { sampleData } from './meta/PageTemplate.sample';
import { dimensions } from './meta/PageTemplate.dimensions';
import { screenshots } from './meta/PageTemplate.screenshots';

export const widgetInfo: IWidget = {
    id: 'com.usegdi.templates.gdi.pageTemplate-basic',
    name: 'pageTemplate-basic',
    description: '',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-pageTemplate'],
    dataTags: [],
    widgetType: 'pageTemplate',
    isBlock: true,
};
