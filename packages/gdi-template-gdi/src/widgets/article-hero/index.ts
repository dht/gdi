import { params } from './meta/Article.params';
import { sampleData } from './meta/Article.sample';
import { dimensions } from './meta/Article.dimensions';
import { screenshots } from './meta/Article.screenshots';

export const widgetInfo: IWidget = {
    id: 'com.usegdi.templates.gdi.article-hero',
    name: 'article-hero',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-article'],
    widgetType: 'article',
};
