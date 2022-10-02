import * as raw from './selectors.raw';
import { createSelector } from 'reselect';
import { IImageWithWidget, IMixerStore } from './types';
import { get, pickBy } from 'lodash';
import { site } from '@gdi/store-site';
import {
    getWidgetTypeFromElement,
    getWidgetTypeFromTags,
    getSchemaPropertiesByType,
} from './utils/widgets';

const rawSite = site.selectors.raw;
const baseSite = site.selectors.base;
export const $instances = site.selectors.base.$instances;

export const $i = (state: IMixerStore) => state;

export const $page = createSelector(
    raw.$rawCurrentIds,
    rawSite.$rawPages,
    (currentIds, pages) => {
        return pages[currentIds.pageId];
    }
);

export const $instancesForCurrentPage = createSelector(
    raw.$rawCurrentIds,
    $instances,
    (currentIds, instances) => {
        return instances.filter(
            (instance) => instance.pageId === currentIds.pageId
        );
    }
);

export const $nextElementOrder = createSelector(
    $instancesForCurrentPage,
    (instancesInPage) => {
        const maxOrder = instancesInPage.reduce((output, instance) => {
            return Math.max(output, instance.order || 0);
        }, 0);

        return maxOrder + 1;
    }
);

export const $instanceSelected = createSelector(
    raw.$rawCurrentIds,
    $instances,
    (currentIds, instances) => {
        return instances.find(
            (instance) => instance.id === currentIds.selectedInstanceId
        );
    }
);

export const $instanceContent = createSelector(
    raw.$rawCurrentIds,
    $instances,
    (currentIds, instances) => {
        return instances.find(
            (instance) => instance.id === currentIds.contentInstanceId
        );
    }
);

export const $typography = createSelector(
    raw.$rawCurrentIds,
    $instances,
    (currentIds, instances) => {
        return instances.find(
            (instance) => instance.id === currentIds.selectedInstanceId
        );
    }
);

export const $palette = createSelector(
    raw.$rawCurrentIds,
    $instances,
    (currentIds, instances) => {
        return instances.find(
            (instance) => instance.id === currentIds.selectedInstanceId
        );
    }
);

export const $locale = createSelector(
    raw.$rawCurrentIds,
    $instances,
    (currentIds, instances) => {
        return instances.find(
            (instance) => instance.id === currentIds.selectedInstanceId
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

export const $instanceTypes = createSelector(
    raw.$rawLibraryWidgets,
    (widgets) => {
        const set = new Set<string>();

        Object.values(widgets).forEach((widget) => {
            const { tags = [] } = widget;

            tags.filter((item) => item.match(/^type-/)).forEach((tag) => {
                const instanceType = tag.split('-').pop();

                if (instanceType) {
                    set.add(instanceType);
                }
            });
        });

        const output = Array.from(set);

        output.sort();

        return output;
    }
);

export const $libraryWidgets = createSelector(
    raw.$rawLibraryWidgets,
    $instanceSelected,
    (widgets, instance) => {
        const selectedElementType = getWidgetTypeFromElement(instance);

        const output: IImageWithWidget[] = [];
        const filter = 'all';

        Object.values(widgets).forEach((widget) => {
            const { id, name, tags = [], screenshots = {} } = widget;
            const instanceType = getWidgetTypeFromTags(tags);

            const isFilterOff = filter === 'all';
            const isElementSelected = selectedElementType !== '';
            const doTypesMatch = selectedElementType === instanceType;

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
                        widget,
                    });
                }
            }
        });

        return output;
    }
);

export const $inspector = createSelector($instanceSelected, (instance) => {
    if (!instance) {
        return;
    }

    const {
        id,
        widgetId,
        pageId,
        order,
        isPlaceholder,
        placeholderType,
        widget,
    } = instance;

    const { tags, description, name } = widget || ({} as any);

    return {
        id,
        widgetId,
        pageId,
        order,
        isPlaceholder,
        placeholderType,
        name,
        description,
        tags,
    };
});

export const $instanceSelectedSchema = createSelector(
    $instanceSelected,
    (instance) => {
        return get(instance, 'widget.params.schema');
    }
);

export const $imageFieldsForCurrentElement = createSelector(
    $instanceSelected,
    (instance) => {
        if (!instance) {
            return [];
        }

        return getSchemaPropertiesByType(instance.widget, 'image', true);
    }
);

export const $selectedElementImageId = createSelector(
    raw.$rawCurrentIds,
    $instanceSelected,
    $libraryImages,
    (currentIds, instance, images) => {
        const { selectedInstanceId: instanceId, fieldId } = currentIds;

        const output = {
            instanceId,
            fieldId,
            imageUrl: '',
            imageId: '',
        };

        if (instance && fieldId) {
            const { instanceProps } = instance;
            const imageUrl = get(instanceProps, fieldId);
            output.imageUrl = imageUrl;
            const image = images.find((i) => i.imageUrl === imageUrl);

            if (image) {
                output.imageId = image.id;
            }
        }

        return output;
    }
);

export const $isImageSwitch = createSelector(
    $selectedElementImageId,
    (selectedElementImageId) => {
        const { instanceId, fieldId } = selectedElementImageId;
        return (
            instanceId && fieldId && instanceId.length > 0 && fieldId.length > 0
        );
    }
);

export const $isSelectedPlaceholder = createSelector(
    $instanceSelected,
    (instance) => {
        if (!instance) {
            return false;
        }

        return instance.isPlaceholder;
    }
);
