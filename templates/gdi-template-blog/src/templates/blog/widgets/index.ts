import { Article } from '../widgets/article-simple/Article';
import { widgetInfo as articleInfo } from './article-simple';

export const widgets: IWidgets = {
    'com.usegdi.templates.blog.hero-simple': {
        ...articleInfo,
        component: Article,
    },
};
