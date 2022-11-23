import { params } from './meta/FourPack.params';
import { sampleData } from './meta/FourPack.sample';
import { dimensions } from './meta/FourPack.dimensions';
import { screenshots } from './meta/FourPack.screenshots';

export const widgetInfo: IWidget = {
    id: 'com.usegdi.templates.tech.fourPack-basic',
    name: 'fourPack-basic',
    description: '',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-fourPack'],
    dataTags: [],
    widgetType: 'fourPack',
    isBlock: true,
};
