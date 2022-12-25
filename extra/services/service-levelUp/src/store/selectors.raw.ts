import { createSelector } from 'reselect';
import { ILevelUpStore } from './types';

export const $i = (state: { levelUp: ILevelUpStore }) => state.levelUp;
const $n = (): null => null;
const $o = (): void => {};

export const $rawLevelUpState = createSelector($i, (state: ILevelUpStore) => state.appStateLevelUp); // prettier-ignore
export const $rawLevelUpCategories = createSelector($i, (state: ILevelUpStore) => state.levelUpCategories); // prettier-ignore
export const $rawBoosterScenes = createSelector($i, (state: ILevelUpStore) => state.boosterScenes); // prettier-ignore
