import { createSelector } from 'reselect';
import { ISettingsStore } from './types';

export const $i = (state: { settings: ISettingsStore }) => state.settings;
const $n = (): null => null;
const $o = (): void => {};

export const $rawSettings = createSelector($i, (state: ISettingsStore) => state.settings); // prettier-ignore
