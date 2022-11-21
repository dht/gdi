import { HeroArticle as ArticleHero } from './HeroArticle/HeroArticle';
import { widgetInfo as heroArticleInfo } from './HeroArticle';

import { HeroBottomArticle as ArticleHeroBottom } from './HeroBottomArticle/HeroBottomArticle';
import { widgetInfo as heroBottomArticleInfo } from './HeroBottomArticle';

import { LargeArticle as ArticleLarge } from './LargeArticle/LargeArticle';
import { widgetInfo as largeArticleInfo } from './LargeArticle';

import { LineArticle as ArticleLine } from './LineArticle/LineArticle';
import { widgetInfo as lineArticleInfo } from './LineArticle';

import TwinArticle, {
    TwinArticle as ArticleTwin,
} from './TwinArticle/TwinArticle';
import { widgetInfo as twinArticleInfo } from './TwinArticle';

export const widgets: IWidgets = {
    'com.usegdi.templates.tech.article-hero': {
        component: ArticleHero,
        ...heroArticleInfo,
    },
    'com.usegdi.templates.tech.article-heroBottom': {
        component: ArticleHeroBottom,
        ...heroBottomArticleInfo,
    },
    'com.usegdi.templates.tech.article-large': {
        component: ArticleLarge,
        ...largeArticleInfo,
    },
    'com.usegdi.templates.tech.article-line': {
        component: ArticleLine,
        ...lineArticleInfo,
    },
    'com.usegdi.templates.tech.article-twin': {
        component: TwinArticle,
        ...twinArticleInfo,
    },
};
