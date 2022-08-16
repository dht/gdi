import { params } from './meta/UserMenu.params';
import { sampleData } from './meta/UserMenu.sample';
import { dimensions } from './meta/UserMenu.dimensions';
import { screenshots } from './meta/UserMenu.screenshots';

export const widgetInfo: IWidget = {
    id: 'com.usegdi.templates.blog.userMenu-simple',
    name: 'userMenu-simple',
    description: '',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-userMenu'],
    widgetType: 'userMenu',
    isBlock: true,
};
