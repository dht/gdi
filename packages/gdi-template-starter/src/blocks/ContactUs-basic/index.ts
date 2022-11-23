import { params } from './meta/ContactUs.params';
import { sampleData } from './meta/ContactUs.sample';
import { dimensions } from './meta/ContactUs.dimensions';
import { screenshots } from './meta/ContactUs.screenshots';

export const widgetInfo: IWidget = {
    id: 'com.usegdi.templates.starter.contactUs-basic',
    name: 'contactUs-basic',
    description: '',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-contactUs'],
    dataTags: [],
    widgetType: 'contactUs',
    isBlock: true,
};
