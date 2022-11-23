import { params } from './meta/PageApp.params';
import { sampleData } from './meta/PageApp.sample';
import { dimensions } from './meta/PageApp.dimensions';
import { screenshots } from './meta/PageApp.screenshots';

export const widgetInfo: IWidget = {
    id: 'com.usegdi.templates.gdi.pageApp-basic',
    name: 'pageApp-basic',
    description: '',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-pageApp'],
    dataTags: [],
    widgetType: 'pageApp',
    isBlock: true,
};
