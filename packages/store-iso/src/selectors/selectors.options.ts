import { createSelector } from 'reselect';
import {
  dynamicTypes,
  externalTypes,
  lightTypes,
  meshTypes,
  videoTypes,
} from '../data/data.options';
import { IIsoStore } from '../types.iso';
import { createOptions } from '../utils/options';

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

export const $dynamics = createSelector($o, () => {
  return createOptions(dynamicTypes);
});

export const $elementTypes = createSelector(
  $lights,
  $externals,
  $meshes,
  $characters,
  $video,
  $dynamics,
  (lights, externals, meshes, characters, video, dynamics) => {
    return {
      lights,
      externals,
      meshes,
      characters,
      video,
      dynamics,
    };
  }
);
