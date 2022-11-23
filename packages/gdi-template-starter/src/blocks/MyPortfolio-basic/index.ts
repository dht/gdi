import { params } from './meta/MyPortfolio.params';
import { sampleData } from './meta/MyPortfolio.sample';
import { dimensions } from './meta/MyPortfolio.dimensions';
import { screenshots } from './meta/MyPortfolio.screenshots';

export const widgetInfo: IWidget = {
    id: 'com.usegdi.templates.starter.myPortfolio-basic',
    name: 'myPortfolio-basic',
    description: '',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-myPortfolio'],
    dataTags: [],
    widgetType: 'myPortfolio',
    isBlock: true,
};
