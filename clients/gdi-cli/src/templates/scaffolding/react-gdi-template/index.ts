import { params } from './meta/$CMP.params';
import { sampleData } from './meta/$CMP.sample';
import { dimensions } from './meta/$CMP.dimensions';
import { screenshots } from './meta/$CMP.screenshots';
import { IBlockInfo } from '@gdi/web-ui';

export const blockInfo: IBlockInfo = {
    id: 'com.useGdi.templates.gdi.$CMPCC-simple',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-$CMPCC'],
};
