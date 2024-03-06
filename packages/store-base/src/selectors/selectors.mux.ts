import { createSelector } from 'reselect';
import * as raw from './selectors.raw';
import { arrayToObject } from '../utils/object';

export const $capability = createSelector(
  raw.$rawCapabilities,
  raw.$rawCurrentIds,
  (capabilities, currentIds) => {
    const { capabilityId } = currentIds;

    return capabilities[capabilityId];
  }
);

export const $muxTabs = createSelector(raw.$rawMuxTabs, (tabs) => {
  return Object.values(tabs).map((tab) => {
    const { name } = tab;

    return {
      ...tab,
      title: name,
    };
  });
});

export const $muxTab = createSelector(raw.$rawMuxTabs, raw.$rawCurrentIds, (tabs, currentIds) => {
  const { muxTabId } = currentIds;
  return tabs[muxTabId];
});

export const $capabilityTabs = createSelector($capability, (capability) => {
  const { instructions } = capability;

  const arr = Object.values(instructions)
    .filter((instruction) => !instruction.isSilent)
    .map((instruction) => {
      const { id, name, boardId } = instruction;

      return {
        id,
        name,
        boardId,
      };
    });

  return arrayToObject(arr, 'id');
});

export const $previousTab = createSelector(
  raw.$rawMuxTabs,
  raw.$rawCurrentIds,
  (tabs, currentIds) => {
    const { muxTabId } = currentIds;

    const arr = Object.values(tabs);

    const index = arr.findIndex((tab) => tab.id === muxTabId);
    const previousIndex = index - 1;
    const previousTab = arr[previousIndex];

    return previousTab;
  }
);
