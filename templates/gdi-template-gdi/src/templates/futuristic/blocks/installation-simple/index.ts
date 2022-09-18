import { params } from './meta/Installation.params';
import { sampleData } from './meta/Installation.sample';
import { dimensions } from './meta/Installation.dimensions';
import { screenshots } from './meta/Installation.screenshots';

export const widgetInfo: IWidget = {
    id: 'com.usegdi.templates.futuristic.installation-simple',
    name: 'installation-simple',
    description: '',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-installation'],
};
