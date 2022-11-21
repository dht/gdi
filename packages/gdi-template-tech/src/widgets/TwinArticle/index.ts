import { params } from './meta/TwinArticle.params';
import { sampleData } from './meta/TwinArticle.sample';
import { dimensions } from './meta/TwinArticle.dimensions';
import { screenshots } from './meta/TwinArticle.screenshots';

export const widgetInfo: IWidget = {
    id: 'com.usegdi.templates.gdi.twinArticle-basic',
    name: 'twinArticle-basic',
    description: '',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-twinArticle'],
    dataTags: [],
    widgetType: 'twinArticle',
    isBlock: true,
};
