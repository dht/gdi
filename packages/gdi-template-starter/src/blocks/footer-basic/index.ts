import { params } from './meta/Footer.params';
import { sampleData } from './meta/Footer.sample';
import { dimensions } from './meta/Footer.dimensions';
import { screenshots } from './meta/Footer.screenshots';

export const widgetInfo: IWidget = {
    id: 'com.usegdi.templates.starter.footer-basic',
    name: 'footer-basic',
    description: '',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-footer'],
    dataTags: [],
    widgetType: 'footer',
    isBlock: true,
};
