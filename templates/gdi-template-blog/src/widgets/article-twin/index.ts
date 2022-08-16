import { params } from './meta/TwinArticle.params';
import { sampleData } from './meta/TwinArticle.sample';
import { dimensions } from './meta/TwinArticle.dimensions';
import { screenshots } from './meta/TwinArticle.screenshots';

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
