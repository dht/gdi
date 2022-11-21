import { params } from './meta/LineArticle.params';
import { sampleData } from './meta/LineArticle.sample';
import { dimensions } from './meta/LineArticle.dimensions';
import { screenshots } from './meta/LineArticle.screenshots';

export const widgetInfo: IWidget = {
    id: 'com.usegdi.templates.gdi.lineArticle-basic',
    name: 'lineArticle-basic',
    description: '',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-lineArticle'],
    dataTags: [],
    widgetType: 'lineArticle',
    isBlock: true,
};
