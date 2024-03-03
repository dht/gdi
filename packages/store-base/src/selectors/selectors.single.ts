import { createSelector } from 'reselect';
import * as raw from './selectors.raw';

export const $boardId = createSelector(raw.$rawCurrentIds, (currentIds) => {
  return currentIds.boardId;
});

export const $assistant = createSelector(
  raw.$rawAssistants,
  raw.$rawCurrentIds,
  (assistants, currentIds) => {
    const { assistantId } = currentIds;

    return assistants[assistantId];
  }
);

export const $capability = createSelector(
  [raw.$rawCapabilities, (_state, id) => id],
  (capabilities, id) => {
    return capabilities[id];
  }
);
