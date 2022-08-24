import { IBlockInfo } from '@gdi/engine';
import { IElement } from '@gdi/store-site';

export const getBlockTypeFromTags = (tags: string[]) => {
    const firstTypeTag = tags.find((item) => item.match(/type-[a-z]+/i));
    return firstTypeTag?.replace('type-', '');
};

export const getBlockTypeFromElement = (element?: IElement) => {
    if (!element) {
        return '';
    }

    const { isPlaceholder, placeholderType = '', block } = element;

    if (isPlaceholder) {
        return placeholderType;
    }

    const { tags } = block;

    return getBlockTypeFromTags(tags) || '';
};
