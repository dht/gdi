import { createSelector } from 'reselect';
import * as raw from './selectors.raw';
import { sortBy } from 'shared-base';
import { createOptions } from '../utils/options';
import { optionsLength, optionsStyle, optionsType } from '../data/data.document';
import { IGdiStore } from '../types';

export const $i = (state: IGdiStore) => state;
export const $n = (): null => null;
export const $o = (): void => {};

export const $assistants = createSelector(raw.$rawAssistants, (assistants) => {
  return Object.values(assistants).map((item) => {
    return {
      id: item.id,
      text: item.name,
    };
  });
});

export const $tags = createSelector(raw.$rawTags, (tags) => {
  return Object.values(tags)
    .filter((tag) => tag.isActive)
    .map((tag) => {
      const color = tag.id.startsWith('project-') ? 'pink' : 'gold';

      return {
        id: tag.id,
        text: tag.id,
        color,
      };
    })
    .sort(sortBy('text'));
});

export const $documentTypes = createSelector($o, () => {
  return createOptions(optionsType);
});

export const $documentLength = createSelector($o, () => {
  return createOptions(optionsLength);
});

export const $documentStyle = createSelector($o, () => {
  return createOptions(optionsStyle);
});
