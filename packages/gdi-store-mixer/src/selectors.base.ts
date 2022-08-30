import * as raw from './selectors.raw';
import { createSelector } from 'reselect';
import { IImageWithBlock, IMixerStore } from './types';
import { get, pickBy } from 'lodash';
import { site } from '@gdi/store-site';
import {
    getBlockTypeFromElement,
    getBlockTypeFromTags,
    getSchemaPropertiesByType,
} from './utils/blocks';

const rawSite = site.selectors.raw;
const baseSite = site.selectors.base;
export const $elements = site.selectors.base.$elements;

export const $i = (state: IMixerStore) => state;

export const $page = createSelector(
    raw.$rawCurrentIds,
    rawSite.$rawPages,
    (currentIds, pages) => {
        return pages[currentIds.pageId];
    }
);

export const $elementsForCurrentPage = createSelector(
    raw.$rawCurrentIds,
    $elements,
    (currentIds, elements) => {
        return elements.filter(
            (instance) => instance.pageId === currentIds.pageId
        );
    }
);

export const $nextElementOrder = createSelector(
    $elementsForCurrentPage,
    (elementsInPage) => {
        const maxOrder = elementsInPage.reduce((output, element) => {
            return Math.max(output, element.order || 0);
        }, 0);

        return maxOrder + 1;
    }
);

export const $elementSelected = createSelector(
    raw.$rawCurrentIds,
    baseSite.$elements,
    (currentIds, elements) => {
        return elements.find(
            (element) => element.id === currentIds.selectedInstanceId
        );
    }
);

export const $elementContent = createSelector(
    raw.$rawCurrentIds,
    baseSite.$elements,
    (currentIds, elements) => {
        return elements.find(
            (element) => element.id === currentIds.contentInstanceId
        );
    }
);

export const $typography = createSelector(
    raw.$rawCurrentIds,
    $elements,
    (currentIds, elements) => {
        return elements.find(
            (element) => element.id === currentIds.selectedInstanceId
        );
    }
);

export const $palette = createSelector(
    raw.$rawCurrentIds,
    $elements,
    (currentIds, elements) => {
        return elements.find(
            (element) => element.id === currentIds.selectedInstanceId
        );
    }
);

export const $locale = createSelector(
    raw.$rawCurrentIds,
    $elements,
    (currentIds, elements) => {
        return elements.find(
            (element) => element.id === currentIds.selectedInstanceId
        );
    }
);

export const $packages = createSelector(raw.$rawPackages, (packages) => {
    return pickBy(packages, (_value, key) => key.includes('@gdi'));
});

export const $libraryImages = createSelector(
    raw.$rawLibraryImages,
    (images) => {
        return Object.values(images);
    }
);

export const $elementTypes = createSelector(raw.$rawLibraryBlocks, (blocks) => {
    const set = new Set<string>();

    Object.values(blocks).forEach((block) => {
        const { tags } = block;

        tags.filter((item) => item.match(/^type-/)).forEach((tag) => {
            const elementType = tag.split('-').pop();

            if (elementType) {
                set.add(elementType);
            }
        });
    });

    const output = Array.from(set);

    output.sort();

    return output;
});

export const $libraryBlocks = createSelector(
    raw.$rawLibraryBlocks,
    raw.$rawBlocksGalleryState,
    $elementSelected,
    (blocks, galleryState, element) => {
        const selectedElementType = getBlockTypeFromElement(element);

        const output: IImageWithBlock[] = [];
        const { filter } = galleryState;

        Object.values(blocks).forEach((block) => {
            const { id, name, tags, screenshots } = block;
            const elementType = getBlockTypeFromTags(tags);

            const isFilterOff = filter === 'all';
            const isElementSelected = selectedElementType !== '';
            const doTypesMatch = selectedElementType === elementType;

            const shouldShow =
                isFilterOff || !isElementSelected || doTypesMatch;

            const firstKey = Object.keys(screenshots).pop();

            if (firstKey && shouldShow) {
                const firstValue = screenshots[firstKey];
                const { desktop } = firstValue || {};
                const { large, thumb } = desktop || {};

                if (large && thumb) {
                    output.push({
                        id,
                        title: name,
                        imageUrl: large.url as string,
                        imageThumbUrl: thumb.url as string,
                        ratio: large.ratio,
                        tags,
                        block,
                    });
                }
            }
        });

        return output;
    }
);

export const $inspector = createSelector($elementSelected, (element) => {
    if (!element) {
        return;
    }

    const {
        id,
        blockId,
        pageId,
        order,
        isPlaceholder,
        placeholderType,
        block,
    } = element;

    const { tags, description, name } = block || ({} as any);

    return {
        id,
        blockId,
        pageId,
        order,
        isPlaceholder,
        placeholderType,
        name,
        description,
        tags,
    };
});

export const $elementSelectedSchema = createSelector(
    $elementSelected,
    (element) => {
        return get(element, 'block.params.schema');
    }
);

export const $imageFieldsForCurrentElement = createSelector(
    $elementSelected,
    (element) => {
        if (!element) {
            return [];
        }

        const fields = getSchemaPropertiesByType(element.block, 'image', true);

        return Object.keys(fields).map((key) => {
            const text = key.split('.').pop() || key;

            return {
                key,
                text,
            };
        });
    }
);
