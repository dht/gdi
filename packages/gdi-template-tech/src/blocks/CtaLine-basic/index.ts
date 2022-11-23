import { params } from './meta/CtaLine.params';
import { sampleData } from './meta/CtaLine.sample';
import { dimensions } from './meta/CtaLine.dimensions';
import { screenshots } from './meta/CtaLine.screenshots';

export const widgetInfo: IWidget = {
    id: 'com.usegdi.templates.tech.ctaLine-basic',
    name: 'ctaLine-basic',
    description: '',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-ctaLine'],
    dataTags: [],
    widgetType: 'ctaLine',
    isBlock: true,
};
