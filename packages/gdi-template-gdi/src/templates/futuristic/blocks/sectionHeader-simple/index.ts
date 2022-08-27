import { params } from './meta/SectionHeader.params';
import { sampleData } from './meta/SectionHeader.sample';
import { dimensions } from './meta/SectionHeader.dimensions';
import { screenshots } from './meta/SectionHeader.screenshots';
import { IBlockInfo } from '@gdi/engine';

export const blockInfo: IBlockInfo = {
    id: 'com.usegdi.templates.futuristic.sectionHeader-simple',
    name: 'sectionHeader-simple',
    description: '',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-sectionHeader'],
};
