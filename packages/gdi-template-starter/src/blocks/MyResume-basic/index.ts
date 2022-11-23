import { params } from './meta/MyResume.params';
import { sampleData } from './meta/MyResume.sample';
import { dimensions } from './meta/MyResume.dimensions';
import { screenshots } from './meta/MyResume.screenshots';

export const widgetInfo: IWidget = {
    id: 'com.usegdi.templates.starter.myResume-basic',
    name: 'myResume-basic',
    description: '',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-myResume'],
    dataTags: [],
    widgetType: 'myResume',
    isBlock: true,
};
