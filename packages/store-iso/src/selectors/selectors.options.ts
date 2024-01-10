import { createSelector } from 'reselect';
import { externalTypes, lightTypes, meshTypes } from '../data/data.options';
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

export const $elementTypes = createSelector(
  $lights,
  $externals,
  $meshes,
  (lights, externals, meshes) => {
    return {
      lights,
      externals,
      meshes,
    };
  }
);
