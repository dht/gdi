import { set } from 'lodash';
import { createSelector } from 'reselect';
import { tools } from '../data/data.tools';
import * as raw from './selectors.raw';
import { arrayToObject } from '../utils/object';

export const $tools = createSelector(raw.$rawCapabilities, (capabilities) => {
  const ids = Object.keys(capabilities);

  set(tools, '[0].function.parameters.properties.taskType.enum', ids);

  return tools;
});

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
