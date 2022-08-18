import { params } from './meta/App.params';
import { sampleData } from './meta/App.sample';
import { dimensions } from './meta/App.dimensions';
import { screenshots } from './meta/App.screenshots';
import { IBlockInfo } from '@gdi/web-ui';

export const blockInfo: IBlockInfo = {
    id: 'com.usegdi.templates.gdi.app-simple',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-app'],
};
