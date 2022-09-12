import { Article } from '../widgets/article-simple/Article';
import { blockInfo as articleInfo } from './article-simple';

export const widgets: IBlocks = {
    'com.usegdi.templates.blog.hero-simple': {
        id: 'com.usegdi.templates.blog.article-simple',
        component: Article,
        info: articleInfo,
    },
};
