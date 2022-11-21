import { params } from './meta/Templates.params';
import { sampleData } from './meta/Templates.sample';
import { dimensions } from './meta/Templates.dimensions';
import { screenshots } from './meta/Templates.screenshots';

export const widgetInfo: IWidget = {
    id: 'com.usegdi.templates.gdi.templates-basic',
    name: 'templates-basic',
    description: '',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-templates'],
    dataTags: [],
    widgetType: 'templates',
    isBlock: true,
};
