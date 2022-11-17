import { params } from './meta/MyServices.params';
import { sampleData } from './meta/MyServices.sample';
import { dimensions } from './meta/MyServices.dimensions';
import { screenshots } from './meta/MyServices.screenshots';

export const widgetInfo: IWidget = {
    id: 'com.usegdi.templates.starter.myServices-basic',
    name: 'myServices-basic',
    description: '',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-myServices'],
    dataTags: [],
    widgetType: 'myServices',
    isBlock: true,
};
