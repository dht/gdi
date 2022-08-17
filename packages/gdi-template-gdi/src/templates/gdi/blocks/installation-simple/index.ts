import { params } from './meta/Installation.params';
import { sampleData } from './meta/Installation.sample';
import { dimensions } from './meta/Installation.dimensions';
import { screenshots } from './meta/Installation.screenshots';
import { IBlockInfo } from '@gdi/web-ui';

export const blockInfo: IBlockInfo = {
    id: 'com.usegdi.templates.gdi.installation-simple',
    name: 'installation-simple',
    description: '',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-installation'],
};
