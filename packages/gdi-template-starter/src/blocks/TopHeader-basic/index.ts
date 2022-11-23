import { params } from './meta/TopHeader.params';
import { sampleData } from './meta/TopHeader.sample';
import { dimensions } from './meta/TopHeader.dimensions';
import { screenshots } from './meta/TopHeader.screenshots';

export const widgetInfo: IWidget = {
    id: 'com.usegdi.templates.starter.topHeader-basic',
    name: 'topHeader-basic',
    description: '',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-topHeader'],
    dataTags: [],
    widgetType: 'topHeader',
    isBlock: true,
};
