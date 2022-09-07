import { params } from './meta/Layout.params';
import { sampleData } from './meta/Layout.sample';
import { dimensions } from './meta/Layout.dimensions';
import { screenshots } from './meta/Layout.screenshots';
import { IBlockInfo } from '@gdi/web-ui';

export const blockInfo: IBlockInfo = {
    id: 'com.useGdi.templates.gdi.layout-simple',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-layout'],
};
