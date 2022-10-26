import * as raw from './selectors.raw';
import { createSelector } from 'reselect';
import { sortBy } from 'shared-base';

export const $i = (state: { devtools: IDevtoolsStore }) => state.devtools;
export const $all = (state: any) => state;
