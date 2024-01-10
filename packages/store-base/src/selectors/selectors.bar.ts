import { createSelector } from 'reselect';
import * as raw from './selectors.raw';
import { findResolution } from '../utils/resolution';
import { upperFirst } from 'lodash';
import { get } from 'lodash';

export const $barItemsVariables = createSelector(
  raw.$rawBoard,
  raw.$rawAppState,
  raw.$rawFlowState,
  raw.$rawAdapters,
  (board, appState, flowState, adapters) => {
    const { screenWidth, tags } = appState;
    const { status } = flowState;
    const { id: boardId = '', setups = {} } = board;

    const isActiveBoard = boardId !== '';
    const resolution = findResolution(screenWidth);
    const setupsCount = isActiveBoard ? Object.keys(setups).length : '';
    const tagsCount = tags.length;
    const provider = get(adapters, 'flowAdapter.providerType', 'no adapter');

    return {
      $boardIdShort: shortId(boardId),
      $flowStatus: status,
      $setupsCount: setupsCount,
      $flowAdapterProvider: provider,
      $resolution: resolution,
      $tagsCount: tagsCount,
    } as any;
  }
);

export const $barItems = createSelector(
  raw.$rawBarItems,
  $barItemsVariables,
  (barItems, variables) => {
    return Object.values(barItems).map((barItem) => {
      const { id, value, emoji, modifier, addClassName } = barItem;

      const parsedValue = value in variables ? variables[value] : value;

      return {
        id,
        value: String(parsedValue),
        emoji,
        modifier,
        addClassName,
        isHidden: parsedValue === '',
      };
    });
  }
);

function shortId(id: string) {
  return upperFirst(id.split('.').pop() ?? '');
}
