import { params } from './meta/SectionHeader.params';
import { sampleData } from './meta/SectionHeader.sample';
import { dimensions } from './meta/SectionHeader.dimensions';
import { screenshots } from './meta/SectionHeader.screenshots';

export const widgetInfo: IWidget = {
    id: 'com.usegdi.templates.starter.sectionHeader-basic',
    name: 'sectionHeader-basic',
    description: '',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-sectionHeader'],
    widgetType: 'sectionHeader',
    isBlock: true,
};
