import { params } from './meta/HeroArticle.params';
import { sampleData } from './meta/HeroArticle.sample';
import { dimensions } from './meta/HeroArticle.dimensions';
import { screenshots } from './meta/HeroArticle.screenshots';

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
