import { createSelector } from 'reselect';
import { externalTypes, lightTypes, meshTypes, videoTypes } from '../data/data.options';
import { createOptions } from '../utils/options';
import { IIsoStore } from '../types.iso';

export const $i = (state: IIsoStore) => state;
export const $n = (): null => null;
export const $o = (): void => {};

export const $lights = createSelector($o, () => {
  return createOptions(lightTypes);
});

export const $externals = createSelector($o, () => {
  return createOptions(externalTypes);
});

export const $meshes = createSelector($o, () => {
  return createOptions(meshTypes);
});

export const $characters = createSelector($o, () => {
  return createOptions(externalTypes);
});

export const $video = createSelector($o, () => {
  return createOptions(videoTypes);
});

export const $elementTypes = createSelector(
  $lights,
  $externals,
  $meshes,
  $characters,
  $video,
  (lights, externals, meshes, characters, video) => {
    return {
      lights,
      externals,
      meshes,
      characters,
      video,
    };
  }
);
