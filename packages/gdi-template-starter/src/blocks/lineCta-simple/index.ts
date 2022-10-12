import { params } from './meta/LineCta.params';
import { sampleData } from './meta/LineCta.sample';
import { dimensions } from './meta/LineCta.dimensions';
import { screenshots } from './meta/LineCta.screenshots';

export const widgetInfo: IWidget = {
    id: 'com.usegdi.templates.starter.lineCta-simple',
    name: 'lineCta-simple',
    description: '',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-lineCta'],
    widgetType: 'lineCta',
    isBlock: true,
};
