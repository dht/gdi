import { params } from './meta/TopMenu.params';
import { sampleData } from './meta/TopMenu.sample';
import { dimensions } from './meta/TopMenu.dimensions';
import { screenshots } from './meta/TopMenu.screenshots';

export const widgetInfo: IWidget = {
    id: 'com.usegdi.templates.starter.topMenu-basic',
    name: 'topMenu-basic',
    description: '',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-topMenu'],
    dataTags: [],
    widgetType: 'topMenu',
    isBlock: true,
};
