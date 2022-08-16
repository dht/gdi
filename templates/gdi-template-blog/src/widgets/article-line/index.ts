import { params } from './meta/LineArticle.params';
import { sampleData } from './meta/LineArticle.sample';
import { dimensions } from './meta/LineArticle.dimensions';
import { screenshots } from './meta/LineArticle.screenshots';

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
