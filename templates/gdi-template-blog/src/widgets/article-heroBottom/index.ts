import { params } from './meta/HeroBottomArticle.params';
import { sampleData } from './meta/HeroBottomArticle.sample';
import { dimensions } from './meta/HeroBottomArticle.dimensions';
import { screenshots } from './meta/HeroBottomArticle.screenshots';

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
