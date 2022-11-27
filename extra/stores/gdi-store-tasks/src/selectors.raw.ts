import { createSelector } from 'reselect';
import { ITasksStore } from './types';

export const $i = (state: { tasks: ITasksStore }) => state.tasks;
export const $n = (): null => null;
export const $o = (): void => {};

export const $rawTasksState = createSelector($i, (state) => state.appStateTasks); // prettier-ignore
export const $rawWorklogs = createSelector($i, (state:ITasksStore) => state.worklogs); // prettier-ignore
export const $rawProjects = createSelector($i, (state: ITasksStore) => state.projects); // prettier-ignore
export const $rawTickets = createSelector($i, (state: ITasksStore) => state.tickets); // prettier-ignore
export const $rawSessions = createSelector($i, (state: ITasksStore) => state.sessions); // prettier-ignore
export const $rawRecentSessions = createSelector($i, (state: ITasksStore) => state.recentSessions); // prettier-ignore
export const $rawCurrentIds = createSelector($i, (state: ITasksStore) => state.currentIdsTasks); // prettier-ignore
