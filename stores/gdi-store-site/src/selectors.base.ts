import * as raw from './selectors.raw';
import { createSelector } from 'reselect';
import { getBlockTypeFromTags } from './utils/blocks';
import { ISiteStore } from './types';
import { mapValues, set } from 'lodash';
import { sortBy } from 'shared-base';

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
    raw.$rawInstancesBlocks,
    raw.$rawBlocks,
    $instancesProps,
    (instances: IBlockInstances, blocks, instanceProps: Json) => {
        return Object.values(instances)
            .sort(sortBy('order'))
            .map((instance) => {
                const block: IBlockInfo | undefined = Object.values(
                    blocks
                ).find((item) => item.id === instance.blockId);

                const { tags = [] } = block || {};

                const elementType =
                    getBlockTypeFromTags(tags) || instance.placeholderType;

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
    raw.$rawInstancesBlocks,
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
        instancesBlocks,
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
            instancesBlocks,
            instancesMapColors,
            instancesMapStrings,
            instancesProps,
            strings,
        };
    }
);
