import { createSelector } from 'reselect';
import { IFactoryStore } from './types';
import { site } from '@gdi/store-site';

const siteSelectors = site.selectors;

export const $i = (state: IFactoryStore) => state;
const $n = (): null => null;
const $o = (): void => {};

export const $rawFactoryState = createSelector($i, (state: IFactoryStore) => state.appStateFactory); // prettier-ignore
export const $rawCurrentIds = createSelector($i, (state: IFactoryStore) => state.currentIdsFactory); // prettier-ignore
export const $rawLayouts = createSelector($i, (state: IFactoryStore) => state.layouts); // prettier-ignore
export const $rawCustomBlocks = createSelector($i, (state: IFactoryStore) => state.customBlocks); // prettier-ignore
export const $rawArticles = createSelector($i, (state: IFactoryStore) => state.articles); // prettier-ignore
export const $rawArticleCategories = createSelector($i, (state: IFactoryStore) => state.articleCategories); // prettier-ignore

// foreign
export const $breakpoints = siteSelectors.raw.$rawBreakpoints;
