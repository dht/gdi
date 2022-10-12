import { params } from './meta/ImageAndText.params';
import { sampleData } from './meta/ImageAndText.sample';
import { dimensions } from './meta/ImageAndText.dimensions';
import { screenshots } from './meta/ImageAndText.screenshots';

export const widgetInfo: IWidget = {
    id: 'com.usegdi.templates.starter.imageAndText-simple',
    name: 'imageAndText-simple',
    description: '',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-imageAndText'],
    widgetType: 'imageAndText',
    isBlock: true,
};
