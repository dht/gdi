import { params } from './meta/UserBar.params';
import { sampleData } from './meta/UserBar.sample';
import { dimensions } from './meta/UserBar.dimensions';
import { screenshots } from './meta/UserBar.screenshots';

export const widgetInfo: IWidget = {
    id: 'com.usegdi.templates.starter.userBar-basic',
    name: 'userBar-basic',
    description: '',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-userBar'],
    widgetType: 'userBar',
    isBlock: true,
};
