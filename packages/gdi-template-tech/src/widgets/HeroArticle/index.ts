import { params } from './meta/HeroArticle.params';
import { sampleData } from './meta/HeroArticle.sample';
import { dimensions } from './meta/HeroArticle.dimensions';
import { screenshots } from './meta/HeroArticle.screenshots';

export const widgetInfo: IWidget = {
    id: 'com.usegdi.templates.gdi.heroArticle-basic',
    name: 'heroArticle-basic',
    description: '',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-heroArticle'],
    dataTags: [],
    widgetType: 'heroArticle',
    isBlock: true,
};
