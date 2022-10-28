import { createSelector } from 'reselect';
import { ICommentsStore } from './types';

export const $i = (state: { comments: ICommentsStore }) => state.comments;
const $n = (): null => null;
const $o = (): void => {};

export const $rawCommentsState = createSelector($i, (state: ICommentsStore) => state.appStateComments); // prettier-ignore
export const $rawComments = createSelector($i, (state: ICommentsStore) => state.comments); // prettier-ignore
export const $rawCommentsPending = createSelector($i, (state: ICommentsStore) => state.pendingComments); // prettier-ignore
