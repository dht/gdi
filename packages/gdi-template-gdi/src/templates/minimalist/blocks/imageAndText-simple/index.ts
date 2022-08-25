import { params } from './meta/ImageAndText.params';
import { sampleData } from './meta/ImageAndText.sample';
import { dimensions } from './meta/ImageAndText.dimensions';
import { screenshots } from './meta/ImageAndText.screenshots';
import { IBlockInfo } from '@gdi/web-ui';

export const blockInfo: IBlockInfo = {
    id: 'com.usegdi.templates.minimalist.imageAndText-simple',
    name: 'imageAndText-simple',
    description: '',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-imageAndText'],
};
