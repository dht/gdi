import * as raw from './selectors.raw';
import { createSelector } from 'reselect';
import { getWidgetTypeFromTags } from './utils/widgets';
import { IElement, IMixerState, IMixerStore, IPages } from './types';
import { sortBy } from 'shared-base';
import { IWidgetInstances } from 'igrid';
import { site } from '@gdi/store-site';

const rawSite = site.selectors.raw;

export const $i = (state: IMixerStore) => state;

export const $page = createSelector(
    raw.$rawCurrentIds,
    raw.$rawPages,
    (currentIds, pages: IPages) => {
        return pages[currentIds.pageId];
    }
);

export const $elements = site.selectors.base.$elements;

export const $pageStructure = createSelector(
    raw.$rawCurrentIds,
    $elements,
    (currentIds, elements) => {
        return elements.filter(
            (instance) => instance.pageId === currentIds.pageId
        );
    }
);

export const $nextElementOrder = createSelector(
    $pageStructure,
    (elementsInPage: IElement[]) => {
        const maxOrder = elementsInPage.reduce((output, element) => {
            return Math.max(output, element.order || 0);
        }, 0);

        return maxOrder + 1;
    }
);

export const $inspector = createSelector(
    raw.$rawCurrentIds,
    $elements,
    (currentIds, elements) => {
        return elements.find(
            (element) => element.id === currentIds.selectedInstanceId
        );
    }
);

export const $content = createSelector(
    raw.$rawCurrentIds,
    rawSite.$rawInstances,
    (currentIds, instances: IWidgetInstances) => {
        return instances[currentIds.contentInstanceId];
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

export const $packages = createSelector(
    raw.$rawCurrentIds,
    $elements,
    (currentIds, elements) => {
        return elements.find(
            (element) => element.id === currentIds.selectedInstanceId
        );
    }
);
