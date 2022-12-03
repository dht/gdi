import * as raw from './selectors.raw';
import { createSelector } from 'reselect';
import { IImageWithWidget, IMixerStore } from './types';
import { get, pickBy, isEmpty } from 'shared-base';
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
    uniq,
} from 'shared-base';

export const $i = (state: { mixer: IMixerStore }) => state.mixer;

export const $instances = createSelector(
    raw.$rawLibraryInstances,
    raw.$rawLibraryInstancesProps,
    raw.$rawLibraryWidgets,
    (instances, instancesProps, widgets) => {
        return Object.values(instances)
            .map((instance: any) => {
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
            .filter((i: any) => i.pageId === pageId)
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
    raw.$rawLibraryInstances,
    (pageInstanceId, instances) => {
        return Object.values(instances).filter(
            (instance) => instance.pageInstanceId === pageInstanceId
        );
    }
);

export const $currentPageInstances = createSelector(
    $pageInstanceId,
    raw.$rawLibraryPageInstances,
    (pageInstanceId, pageInstances) => {
        if (!pageInstanceId) {
            return;
        }

        return pageInstances[pageInstanceId];
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

export const $instancesForCurrentZoomBuild = createSelector(
    raw.$rawCurrentIds,
    $instances,
    (currentIds, instances) => {
        const { zoomWidgetId: zoomWidgetIdRaw = '' } = currentIds;
        const zoomWidgetId = zoomWidgetIdRaw.replace(/_/g, '.');

        return instances.filter(
            (instance: IWidgetInstance) => instance.widgetId === zoomWidgetId
        );
    }
);

export const $widgetForCurrentZoomBuild = createSelector(
    raw.$rawCurrentIds,
    raw.$rawLibraryWidgets,
    (currentIds, widgets) => {
        const { zoomWidgetId: zoomWidgetIdRaw = '' } = currentIds;
        const zoomWidgetId = zoomWidgetIdRaw.replace(/_/g, '.');

        return Object.values(widgets).find(
            (widget: IWidget) => widget.id === zoomWidgetId
        );
    }
);

export const $instancesPropsForCurrentPage = createSelector(
    $instancesForCurrentPage,
    raw.$rawLibraryInstancesProps,
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
        return Object.values(images).sort(sortBy('_createdDate', 'desc'));
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
                    dataTags: [],
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

export const $libraryPages = createSelector(
    raw.$rawLibraryPages,
    raw.$rawLibraryPageInstances,
    (pages, pageInstances) => {
        return Object.values(pages)
            .map((page) => {
                const { status = 'draft', pageInstanceId } = page;

                let pageInstance: IPageInstance | undefined =
                    pageInstances[pageInstanceId ?? ''];

                if (!pageInstance) {
                    pageInstance = Object.values(pageInstances)
                        .sort(sortBy('order'))
                        .find((instance) => instance.pageId === page.id);
                }

                const { version: pageInstanceVersion } = pageInstance ?? {
                    version: '[=]',
                };

                return {
                    ...page,
                    pageInstanceVersion,
                    status,
                };
            })
            .sort(sortBy('order', 'asc'));
    }
);

export const $libraryPageInstancesAssets = createSelector(
    raw.$rawLibraryPageInstances,
    raw.$rawLibraryInstances,
    raw.$rawLibraryWidgets,
    raw.$rawLibraryInstancesProps,
    raw.$rawLibraryImages,
    (pageInstances, instances, widgets, instancesProps, images) => {
        const output: IPagesInstanceAssets = {};

        Object.values(pageInstances).forEach((item) => {
            const { id } = item;

            const instancesForItem = Object.values(instances).filter(
                (i: IWidgetInstance) => i.pageInstanceId === id
            );

            const neededWidgets = uniq(
                instancesForItem.map((i: IWidgetInstance) => i.widgetId)
            );

            const widgetsForItem = Object.values(widgets).filter((i: IWidget) =>
                neededWidgets.includes(i.id)
            );

            const instancesPropsForItem = Object.keys(instancesForItem).reduce(
                (acc, instanceId) => {
                    const value = instancesProps[instanceId];

                    if (value) {
                        acc[instanceId] = value;
                    }
                    return acc;
                },
                {} as Json
            );

            const imagesForItem: IImage[] = [];

            output[id] = {
                id,
                pageInstance: item,
                instances: instancesForItem,
                widgets: widgetsForItem,
                instancesProps: instancesPropsForItem,
                images: imagesForItem,
            };
        });

        return output;
    }
);

export const $panelLibraryFlavour = createSelector(
    raw.$rawCurrentIds,
    raw.$rawMixerState,
    (currentIds, mixerState) => {
        const { selectedInstanceId } = currentIds;
        const { panelLibraryFlavour } = mixerState;

        if (selectedInstanceId === '<NEW>') {
            return 'widgets';
        }

        return panelLibraryFlavour;
    }
);

export const $pageData = createSelector(
    $pageInstanceId,
    raw.$rawLibraryPageInstances,
    raw.$rawLibraryInstances,
    raw.$rawLibraryInstancesProps,
    (
        pageInstanceId,
        allLibraryPageInstances,
        allLibraryInstances,
        allLibraryInstancesProps
    ) => {
        const libraryPageInstances = pickBy(
            allLibraryPageInstances,
            (i) => i.id === pageInstanceId
        );

        const libraryInstances = pickBy(
            allLibraryInstances,
            (i) => i.pageInstanceId === pageInstanceId
        );

        const libraryInstancesIds = Object.keys(libraryInstances);

        const libraryInstancesProps = pickBy(allLibraryInstancesProps, (i) =>
            libraryInstancesIds.includes(i.id)
        );

        return {
            libraryPageInstances,
            libraryInstances,
            libraryInstancesProps,
        };
    }
);

export const $libraryData = createSelector(
    raw.$rawLibraryImages,
    raw.$rawLibraryWidgets,
    raw.$rawLibraryTypography,
    raw.$rawLibraryPalettes,
    raw.$rawLibraryPages,
    raw.$rawLibraryPageInstances,
    raw.$rawLibraryInstances,
    raw.$rawLibraryInstancesProps,
    raw.$rawLibraryDatasets,
    (
        libraryImages,
        libraryWidgets,
        libraryTypography,
        libraryPalettes,
        libraryPages,
        libraryPageInstances,
        libraryInstances,
        libraryInstancesProps,
        libraryDatasets
    ) => {
        return {
            libraryImages,
            libraryWidgets,
            libraryTypography,
            libraryPalettes,
            libraryPages,
            libraryPageInstances,
            libraryInstances,
            libraryInstancesProps,
            libraryDatasets,
        };
    }
);
