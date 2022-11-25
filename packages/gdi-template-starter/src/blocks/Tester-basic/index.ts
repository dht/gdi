import { params } from './meta/Tester.params';
import { sampleData } from './meta/Tester.sample';
import { dimensions } from './meta/Tester.dimensions';
import { screenshots } from './meta/Tester.screenshots';

export const widgetInfo: IWidget = {
    id: 'com.usegdi.templates.starter.tester-basic',
    name: 'tester-basic',
    description: '',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-tester'],
    dataTags: [],
    widgetType: 'tester',
    isBlock: true,
};
