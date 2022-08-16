import { params } from './meta/TopHeader.params';
import { sampleData } from './meta/TopHeader.sample';
import { dimensions } from './meta/TopHeader.dimensions';
import { screenshots } from './meta/TopHeader.screenshots';

export const widgetInfo: IWidget = {
    id: 'com.usegdi.templates.blog.topHeader-simple',
    name: 'topHeader-simple',
    description: '',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-topHeader'],
    widgetType: 'topHeader',
    isBlock: true,
};
