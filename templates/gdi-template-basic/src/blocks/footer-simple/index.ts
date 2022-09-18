import { params } from './meta/Footer.params';
import { sampleData } from './meta/Footer.sample';
import { dimensions } from './meta/Footer.dimensions';
import { screenshots } from './meta/Footer.screenshots';

export const widgetInfo: IWidget = {
    id: 'com.usegdi.templates.basic.footer-simple',
    name: 'footer-simple',
    description: '',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-footer'],
    widgetType: 'footer',
    isBlock: true,
};
