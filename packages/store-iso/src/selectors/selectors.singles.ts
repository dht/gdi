import { createSelector } from 'reselect';
import * as raw from './selectors.raw';

export const $dot = createSelector([raw.$rawSceneDots, (_state, id) => id], (items, id) => {
  return items[id];
});

export const $audio = createSelector([raw.$rawSceneAudios, (_state, id) => id], (items, id) => {
  return items[id];
});

export const $effect = createSelector([raw.$rawSceneEffects, (_state, id) => id], (items, id) => {
  return items[id];
});
