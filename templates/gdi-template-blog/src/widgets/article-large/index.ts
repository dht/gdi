import { params } from './meta/LargeArticle.params';
import { sampleData } from './meta/LargeArticle.sample';
import { dimensions } from './meta/LargeArticle.dimensions';
import { screenshots } from './meta/LargeArticle.screenshots';

export const widgetInfo: IWidget = {
    id: 'com.useGdi.templates.gdi.article-simple',
    name: 'article-simple',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-article'],
    widgetType: 'article',
};
