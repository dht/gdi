import { params } from './meta/AboutMe.params';
import { sampleData } from './meta/AboutMe.sample';
import { dimensions } from './meta/AboutMe.dimensions';
import { screenshots } from './meta/AboutMe.screenshots';

export const widgetInfo: IWidget = {
    id: 'com.usegdi.templates.starter.aboutMe-basic',
    name: 'aboutMe-basic',
    description: '',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-aboutMe'],
    dataTags: [],
    widgetType: 'aboutMe',
    isBlock: true,
};
