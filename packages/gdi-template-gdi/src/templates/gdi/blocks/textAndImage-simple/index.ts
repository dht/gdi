import { params } from './meta/TextAndImage.params';
import { sampleData } from './meta/TextAndImage.sample';
import { dimensions } from './meta/TextAndImage.dimensions';
import { screenshots } from './meta/TextAndImage.screenshots';
import { IBlockInfo } from '@gdi/web-ui';

export const blockInfo: IBlockInfo = {
    id: 'com.useGdi.templates.gdi.textAndImage-simple',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-textAndImage'],
};
