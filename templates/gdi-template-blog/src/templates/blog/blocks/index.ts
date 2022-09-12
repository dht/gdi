import { Hero } from './hero-simple/Hero';
import { blockInfo as heroInfo } from './hero-simple';
import { widgets } from '../widgets';

export const blocks: IBlocks = {
    'com.usegdi.templates.blog.hero-simple': {
        id: 'com.usegdi.templates.blog.hero-simple',
        component: Hero,
        info: heroInfo,
    },
    ...widgets,
};
