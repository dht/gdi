import * as raw from './selectors.raw';
import { createSelector } from 'reselect';
import { getWidgetTypeFromTags } from './utils/widgets';
import { IElement, ISiteStore } from './types';
import { sortBy } from 'shared-base';
import { IWidgetInstances } from 'igrid';
import { mapValues, set } from 'lodash';

export const $i = (state: ISiteStore) => state;

export const $instancesProps = createSelector(
    raw.$rawInstancesProps,
    (instanceProps: Json) => {
        return mapValues(instanceProps, (values: Json) => {
            return Object.keys(values).reduce(
                (output, key) => {
                    set(output, key.replace('_', '.'), values[key]);
                    return output;
                },
                {
                    strings: {},
                    colors: {},
                    extra: {},
                } as Json
            );
        });
    }
);

export const $elements = createSelector(
    raw.$rawInstances,
    raw.$rawBlocks,
    $instancesProps,
    (instances: IWidgetInstances, blocks, instanceProps: Json) => {
        return Object.values(instances)
            .sort(sortBy('order'))
            .map((instance) => {
                const block = Object.values(blocks).find(
                    (item) => item.id === instance.widgetId
                );

                const { tags = [] } = block || {};

                const elementType =
                    getWidgetTypeFromTags(tags) || instance.placeholderType;

                return {
                    ...instance,
                    block,
                    elementType,
                    instanceProps: instanceProps[instance.id],
                };
            }) as IElement[];
    }
);

export const $siteData = createSelector(
    raw.$rawMeta,
    raw.$rawLocale,
    raw.$rawPages,
    raw.$rawPalette,
    raw.$rawFontSizes,
    raw.$rawSpacing,
    raw.$rawFonts,
    raw.$rawInstances,
    raw.$rawImages,
    raw.$rawBlocks,
    raw.$rawInstancesMapColors,
    raw.$rawInstancesMapStrings,
    raw.$rawInstancesProps,
    raw.$rawStrings,
    (
        meta,
        locale,
        pages,
        palette,
        fontSizes,
        images,
        spacing,
        fonts,
        blocks,
        instances,
        instancesMapColors,
        instancesMapStrings,
        instancesProps,
        strings
    ) => {
        return {
            meta,
            locale,
            pages,
            palette,
            fontSizes,
            images,
            spacing,
            fonts,
            blocks,
            instances,
            instancesMapColors,
            instancesMapStrings,
            instancesProps,
            strings,
        };
    }
);
