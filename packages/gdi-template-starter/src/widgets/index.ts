import { Article as ArticleHero } from './article-hero/Article';
import { widgetInfo as heroArticleInfo } from './article-hero';

export const widgets: IWidgets = {
    'com.usegdi.templates.starter.article-hero': {
        component: ArticleHero,
        ...heroArticleInfo,
    },
};
