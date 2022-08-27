import { params } from './meta/Hero.params';
import { sampleData } from './meta/Hero.sample';
import { dimensions } from './meta/Hero.dimensions';
import { screenshots } from './meta/Hero.screenshots';
import { IBlockInfo } from '@gdi/engine';

export const blockInfo: IBlockInfo = {
    id: 'com.usegdi.templates.futuristic.hero-simple',
    name: 'hero-simple',
    description: '',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-hero'],
};
