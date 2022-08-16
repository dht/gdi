import { version, author } from '../../../package.json';
import { blocks } from './blocks';

export const templateInfo = {
    id: 'com.useGdi.templates.gdi',
    version,
    author,
    blocksCount: Object.keys(blocks).length,
};
