import { params } from './meta/Installation.params';
import { sampleData } from './meta/Installation.sample';
import { dimensions } from './meta/Installation.dimensions';
import { screenshots } from './meta/Installation.screenshots';

export const widgetInfo: IWidget = {
    id: 'com.usegdi.templates.starter.installation-basic',
    name: 'installation-basic',
    description: '',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-installation'],
    widgetType: 'installation',
    isBlock: true,
};
