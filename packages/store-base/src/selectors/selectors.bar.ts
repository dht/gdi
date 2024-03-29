import { upperFirst } from 'lodash';
import { createSelector } from 'reselect';
import { barItems } from '../initialState.bar';
import { findResolution } from '../utils/resolution';
import * as raw from './selectors.raw';
import * as assets from './selectors.assets';

export const $barItemsVariables = createSelector(
  raw.$rawBoard,
  raw.$rawAppState,
  raw.$rawFlowState,
  assets.$assetsCurrent,
  raw.$rawAdapters,
  raw.$rawCurrentIds,
  (board, appState, flowState, assets, adapters, currentIds) => {
    const { screenWidth, tags, isLocalInstance } = appState;
    const { projectId } = currentIds;
    const { status } = flowState;
    const { id: boardId = '' } = board;

    const isActiveBoard = boardId !== '';
    const resolution = findResolution(screenWidth);
    const tagsCount = tags.length;
    const provider = isLocalInstance ? 'local' : 'firebase';

    const assetsCount = Object.values(assets ?? {}).length;

    return {
      $boardIdShort: shortId(boardId),
      $flowStatus: status,
      $flowAdapterProvider: provider,
      $resolution: resolution,
      $tagsCount: tagsCount,
      $assetsCount: assetsCount,
      $project: projectId || '[project]',
    } as any;
  }
);

export const $barItems = createSelector($barItemsVariables, (variables) => {
  return Object.values(barItems).map((barItem) => {
    const { id, value, emoji, modifier, addClassName, shortKey } = barItem;

    const parsedValue = value in variables ? variables[value] : value;

    return {
      id,
      value: String(parsedValue),
      emoji,
      modifier,
      addClassName,
      isHidden: parsedValue === '',
      shortKey,
    };
  });
});

function shortId(id: string) {
  return upperFirst(id.split('.').pop() ?? '');
}
