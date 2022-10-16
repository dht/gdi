import * as raw from './selectors.raw';
import { createSelector } from 'reselect';
import { IImageWithWidget, IMixerStore } from './types';
import { get, pickBy, isEmpty } from 'lodash';
import {
    getWidgetTypeFromElement,
    getWidgetTypeFromTags,
    getSchemaPropertiesByType,
} from './utils/widgets';
import {
    sortBy,
    getScreenshotThumb,
    getScreenshotData,
    unflattenInstanceProps,
} from 'shared-base';

export const $i = (state: { mixer: IMixerStore }) => state.mixer;

export const $instances = createSelector(
    raw.$rawInstances,
    raw.$rawInstancesProps,
    raw.$rawLibraryWidgets,
    (instances, instancesProps, widgets) => {
        return Object.values(instances)
            .map((instance) => {
                const props = instancesProps[instance.id];
                const widget = widgets[instance.widgetId];

                const isPopulated = !isEmpty(props);
                const widgetType = get(widget, 'widgetType');

                return {
                    ...instance,
                    // transient
                    instanceProps: unflattenInstanceProps(props),
                    widget,
                    widgetType,
                    isPopulated,
                    ...getScreenshotThumb(widget),
                } as IWidgetInstance;
            })
            .sort(sortBy('order', 'asc'));
    }
);

export const $page = createSelector(
    raw.$rawCurrentIds,
    raw.$rawLibraryPages,
    (currentIds, pages) => {
        const { pageId } = currentIds;

        if (!pageId) {
            return null;
        }

        return pages[pageId];
    }
);

export const $pageInstances = createSelector(
    raw.$rawCurrentIds,
    raw.$rawLibraryPageInstances,
    (currentIds, pageInstances) => {
        const { pageId } = currentIds;

        if (!pageId) {
            return [];
        }

        return Object.values(pageInstances)
            .filter((i) => i.pageId === pageId)
            .sort(sortBy('version'));
    }
);

export const $pageInstanceId = createSelector(
    raw.$rawCurrentIds,
    $pageInstances,
    (currentIds, pageInstances) => {
        let id: string | undefined;

        const { pageInstanceId } = currentIds;

        if (pageInstanceId) {
            id = pageInstanceId;
        } else if (pageInstances.length > 0) {
            id = pageInstances[0].id;
        }

        return id;
    }
);

export const $pageInstance = createSelector(
    $pageInstanceId,
    raw.$rawLibraryPageInstances,
    (pageInstanceId, pageInstances) => {
        if (!pageInstanceId) {
            return null;
        }

        return pageInstances[pageInstanceId];
    }
);

export const $instancesForPageInstance = createSelector(
    $pageInstanceId,
    raw.$rawInstances,
    (pageInstanceId, instances) => {
        return Object.values(instances).filter(
            (instance) => instance.pageInstanceId === pageInstanceId
        );
    }
);

export const $instancesForCurrentPage = createSelector(
    $pageInstanceId,
    $instances,
    (pageInstanceId, instances) => {
        return instances.filter(
            (instance: IWidgetInstance) =>
                instance.pageInstanceId === pageInstanceId
        );
    }
);

export const $instancesPropsForCurrentPage = createSelector(
    $instancesForCurrentPage,
    raw.$rawInstancesProps,
    (instances, instancesProps) => {
        return instances.reduce((output, instance) => {
            const props = instancesProps[instance.id];
            output[instance.id] = props;
            return output;
        }, {} as Json);
    }
);

export const $nextInstanceVersion = createSelector(
    $pageInstances,
    (instances) => {
        return 'v' + (instances.length + 1);
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

        Object.values(widgets).forEach((widget: IWidget) => {
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

export const $libraryWidgetsAll = createSelector(
    raw.$rawLibraryWidgets,
    (widgets) => {
        const output: IImageWithWidget[] = [];

        return Object.values(widgets).map((widget) => {
            const { id, name, tags = [] } = widget;

            return {
                id,
                title: name,
                ...getScreenshotData(widget),
                tags,
                widget,
            };
        });

        return output;
    }
);

export const $libraryWidgets = createSelector(
    raw.$rawLibraryWidgets,
    $instanceSelected,
    (widgets, instance) => {
        if (!instance) {
            return [];
        }

        const selectedElementType = instance.widgetType;

        const output: IImageWithWidget[] = [];

        Object.values(widgets).forEach((widget) => {
            const { id, name, tags = [], widgetType } = widget;

            const isElementSelected = selectedElementType !== '';
            const doTypesMatch = selectedElementType === widgetType;

            const shouldShow = !isElementSelected || doTypesMatch;

            if (shouldShow) {
                output.push({
                    id,
                    title: name,
                    ...getScreenshotData(widget),
                    tags,
                    widget,
                });
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
        if (!instance || !instance.widget) {
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

export const $libraryPages = createSelector(raw.$rawLibraryPages, (pages) => {
    return Object.values(pages).sort(sortBy('order', 'asc'));
});
