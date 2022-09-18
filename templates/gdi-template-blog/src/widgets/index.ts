import { Article } from './article-simple/Article';
import { widgetInfo as articleInfo } from './article-simple';

export const widgets: IWidgets = {
    'com.usegdi.templates.blog.hero-simple': {
        ...articleInfo,
        component: Article,
    },
};
