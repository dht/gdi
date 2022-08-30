import { get, sample } from 'lodash';

export const getBlockTypeFromTags = (tags: string[] = []) => {
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

    const { tags } = block || {};

    return getBlockTypeFromTags(tags) || '';
};

export const getSchemaPropertiesByType = (
    block: IBlockInfo,
    propertyType: string | string[],
    includeEmpty: boolean
) => {
    const typeArr = Array.isArray(propertyType) ? propertyType : [propertyType];
    const output: Json = {};
    const { params, sampleData } = block;
    const { schema } = params;

    const firstSampleData = Object.values(sampleData).pop() || {};

    function checkGroup(group: IBlockSchemaGroup, prefix: string) {
        Object.keys(group).forEach((key) => {
            const field = group[key];
            if (typeArr.includes(field.fieldType)) {
                const xPath = `${prefix}.${key}`;
                const value = get(firstSampleData, xPath);

                if (typeof value !== 'undefined' || includeEmpty) {
                    output[xPath] = value;
                }
            }
        });
    }

    checkGroup(schema.strings, 'strings');
    checkGroup(schema.colors, 'colors');
    checkGroup(schema.extra, 'extra');

    return output;
};
