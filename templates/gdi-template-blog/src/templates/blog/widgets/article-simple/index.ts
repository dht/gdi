import { params } from './meta/Article.params';
import { sampleData } from './meta/Article.sample';
import { dimensions } from './meta/Article.dimensions';
import { screenshots } from './meta/Article.screenshots';
import { IBlockInfo } from '@gdi/web-ui';

export const blockInfo: IBlockInfo = {
    id: 'com.useGdi.templates.gdi.article-simple',
    params,
    sampleData,
    dimensions,
    screenshots,
    tags: ['type-article'],
    isWidget: true,
};
