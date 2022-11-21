import { params } from './meta/LargeArticle.params';
import { sampleData } from './meta/LargeArticle.sample';
import { dimensions } from './meta/LargeArticle.dimensions';
import { screenshots } from './meta/LargeArticle.screenshots';

export const widgetInfo: IWidget = {
    id: 'com.usegdi.templates.gdi.largeArticle-basic',
    name: 'largeArticle-basic',
    description: '',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-largeArticle'],
    dataTags: [],
    widgetType: 'largeArticle',
    isBlock: true,
};
