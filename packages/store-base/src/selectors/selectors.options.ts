import { createSelector } from 'reselect';
import * as raw from './selectors.raw';
import { sortBy } from 'shared-base';
import { createOptions } from '../utils/options';
import {
  optionsAudience,
  optionsImageQuality,
  optionsImageSize,
  optionsLength,
  optionsPlatform,
  optionsRootPanel,
  optionsStyle,
  optionsTone,
  optionsType,
} from '../data/data.document';
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
      const color = tag.isProjectTag ? 'pink' : 'gold';

      return {
        ...tag,
        id: tag.id,
        text: tag.id,
        color,
      };
    })
    .sort(sortBy('text'));
});

export const $projectTags = createSelector($tags, (tags) => {
  return tags
    .filter((tag) => tag.isProjectTag)
    .map((tag) => {
      const { id, text, color } = tag;

      return {
        id: id.replace('project-', ''),
        text: text.replace('project-', ''),
        color,
      };
    });
});

export const $basicTags = createSelector($tags, (tags) => {
  return tags.filter((tag) => !tag.isProjectTag);
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

export const $postAudience = createSelector($o, () => {
  return createOptions(optionsAudience);
});

export const $postPlatform = createSelector($o, () => {
  return createOptions(optionsPlatform);
});

export const $postTone = createSelector($o, () => {
  return createOptions(optionsTone);
});

export const $imageSize = createSelector($o, () => {
  return createOptions(optionsImageSize);
});

export const $imageQuality = createSelector($o, () => {
  return createOptions(optionsImageQuality);
});

export const $rootPanels = createSelector($o, () => {
  return createOptions(optionsRootPanel);
});

export const $allOptions = createSelector(
  $documentTypes,
  $documentLength,
  $documentStyle,
  $imageSize,
  $imageQuality,
  $rootPanels,
  (documentTypes, documentLength, documentStyle, imageSize, imageQuality, rootPanels) => {
    return {
      $documentTypes: documentTypes,
      $documentLength: documentLength,
      $documentStyle: documentStyle,
      $imageSize: imageSize,
      $imageQuality: imageQuality,
      $rootPanels: rootPanels,
    };
  }
);
