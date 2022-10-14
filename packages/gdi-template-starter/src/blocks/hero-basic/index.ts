import { params } from './meta/Hero.params';
import { sampleData } from './meta/Hero.sample';
import { dimensions } from './meta/Hero.dimensions';
import { screenshots } from './meta/Hero.screenshots';

export const widgetInfo: IWidget = {
    id: 'com.usegdi.templates.starter.hero-basic',
    name: 'hero-basic',
    description: '',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-hero'],
    widgetType: 'hero',
    isBlock: true,
};
