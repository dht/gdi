import { Hero } from './hero-simple/Hero';
import { widgetInfo as heroInfo } from './hero-simple';

export const widgets: IWidgets = {
    'com.usegdi.templates.blog.hero-simple': {
        component: Hero,
        ...heroInfo,
    },
};
