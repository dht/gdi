import { params } from './meta/Apps.params';
import { sampleData } from './meta/Apps.sample';
import { dimensions } from './meta/Apps.dimensions';
import { screenshots } from './meta/Apps.screenshots';

export const widgetInfo: IWidget = {
    id: 'com.usegdi.templates.gdi.apps-basic',
    name: 'apps-basic',
    description: '',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-apps'],
    dataTags: [],
    widgetType: 'apps',
    isBlock: true,
};
