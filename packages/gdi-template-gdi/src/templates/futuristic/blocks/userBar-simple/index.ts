import { params } from './meta/UserBar.params';
import { sampleData } from './meta/UserBar.sample';
import { dimensions } from './meta/UserBar.dimensions';
import { screenshots } from './meta/UserBar.screenshots';
import { IBlockInfo } from '@gdi/engine';

export const blockInfo: IBlockInfo = {
    id: 'com.usegdi.templates.futuristic.userBar-simple',
    name: 'userBar-simple',
    description: '',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-userBar'],
};
