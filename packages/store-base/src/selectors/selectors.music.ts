import { createSelector } from 'reselect';
import * as raw from './selectors.raw';
import { arrayToObject } from '../utils/object';

export const $remoteItems = createSelector(
  raw.$rawRemoteItems,
  raw.$rawCurrentIds,
  (items, currentIds) => {
    const { remoteItemId } = currentIds;
    return Object.values(items).map((item) => {
      const isSelected = item.id === remoteItemId;

      return {
        ...item,
        isSelected,
      };
    });
  }
);

export const $purchased = createSelector($remoteItems, (items) => {
  return items.filter((item: any) => item.isPurchased);
});

export const $search = createSelector($remoteItems, (items) => {
  return items.filter((item: any) => !item.isPurchased);
});

export const $purchasedObj = createSelector($purchased, (items) => {
  return arrayToObject(items);
});

export const $currentItem = createSelector(
  $remoteItems,
  raw.$rawCurrentIds,
  (items, currentIds) => {
    const { remoteItemId } = currentIds;
    return items.find((item: any) => item.id === remoteItemId);
  }
);
