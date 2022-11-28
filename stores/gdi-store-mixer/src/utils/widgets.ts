import { get } from 'shared-base';

export const getWidgetTypeFromTags = (tags: string[] = []) => {
    const firstTypeTag = tags.find((item) => item.match(/type-[a-z]+/i));
    return firstTypeTag?.replace('type-', '');
};

export const getWidgetTypeFromElement = (element?: IWidgetInstance) => {
    if (!element) {
        return '';
    }

    const { isPlaceholder, placeholderType = '', widget } = element;

    if (isPlaceholder) {
        return placeholderType;
    }

    const { tags } = widget ?? {};

    return getWidgetTypeFromTags(tags) ?? '';
};

export const getSchemaPropertiesByType = (
    widget: IWidget,
    propertyType: string | string[],
    includeEmpty: boolean
) => {
    const typeArr = Array.isArray(propertyType) ? propertyType : [propertyType];
    const output: Json = {};

    if (!widget) {
        return {};
    }

    const { params, sampleData = {} } = widget;

    if (!params) {
        return;
    }

    const { schema } = params;

    const firstSampleData = Object.values(sampleData).pop() ?? {};

    function checkGroup(group: IWidgetSchemaGroup, prefix: string) {
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
