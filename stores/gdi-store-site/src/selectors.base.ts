import * as raw from './selectors.raw';
import { createSelector } from 'reselect';
import { getWidgetTypeFromTags } from './utils/widgets';
import { ISiteStore } from './types';
import { mapValues, set } from 'lodash';
import { sortBy } from 'shared-base';

export const $i = (state: { site: ISiteStore }) => state.site;

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

export const $instances = createSelector(
    raw.$rawInstances,
    raw.$rawWidgets,
    $instancesProps,
    (instances: IWidgetInstances, widgets, instanceProps: Json) => {
        return Object.values(instances)
            .sort(sortBy('order'))
            .map((instance) => {
                const widget = widgets[instance.widgetId];

                return {
                    ...instance,
                    widget,
                    instanceProps: instanceProps[instance.id],
                };
            });
    }
);

export const $pages = createSelector(raw.$rawPages, (pages) => pages);

export const $siteData = createSelector(
    raw.$rawMeta,
    raw.$rawLocale,
    raw.$rawPages,
    raw.$rawPalette,
    raw.$rawImages,
    raw.$rawFonts,
    raw.$rawInstances,
    raw.$rawWidgets,
    raw.$rawInstancesProps,
    (
        meta,
        locale,
        pages,
        palette,
        images,
        fonts,
        widgets,
        instances,
        instancesProps
    ) => {
        return {
            meta,
            locale,
            pages,
            palette,
            images,
            fonts,
            widgets,
            instances,
            instancesProps,
        };
    }
);
