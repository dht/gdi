import { params } from './meta/CtaAction.params';
import { sampleData } from './meta/CtaAction.sample';
import { dimensions } from './meta/CtaAction.dimensions';
import { screenshots } from './meta/CtaAction.screenshots';

export const widgetInfo: IWidget = {
    id: 'com.usegdi.templates.starter.ctaAction-basic',
    name: 'ctaAction-basic',
    description: '',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-ctaAction'],
    dataTags: [],
    widgetType: 'ctaAction',
    isBlock: true,
};
