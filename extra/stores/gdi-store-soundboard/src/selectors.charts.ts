import { createSelector } from 'reselect';
import * as raw from './selectors.raw';

export const $actualByProjects = createSelector(raw.$rawProjects, () => {});
