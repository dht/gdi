import { params } from './meta/Feature.params';
import { sampleData } from './meta/Feature.sample';
import { dimensions } from './meta/Feature.dimensions';
import { screenshots } from './meta/Feature.screenshots';
import { IBlockInfo } from '@gdi/engine';

export const blockInfo: IBlockInfo = {
    id: 'com.usegdi.templates.minimalist.feature-simple',
    name: 'feature-simple',
    description: '',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-feature'],
};
