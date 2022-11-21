import { params } from './meta/SixPack.params';
import { sampleData } from './meta/SixPack.sample';
import { dimensions } from './meta/SixPack.dimensions';
import { screenshots } from './meta/SixPack.screenshots';

export const widgetInfo: IWidget = {
    id: 'com.usegdi.templates.tech.sixPack-basic',
    name: 'sixPack-basic',
    description: '',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-sixPack'],
    dataTags: [],
    widgetType: 'sixPack',
    isBlock: true,
};
