import { createSelector } from 'reselect';
import { IComments, ICommentsStore } from './types';
import * as raw from './selectors.raw';
import { arrayToOptions, itemsTagsToOptions, optionsPeriod } from 'shared-base';
import { minutesThisX } from '@gdi/language';

export const $i = (state: { comments: ICommentsStore }) => state.comments;

export const $periods = createSelector($i, (_i): IOption[] => {
    const minutes = minutesThisX();
    return optionsPeriod(minutes, true);
});

export const $commentsTags = createSelector(
    raw.$rawComments,
    (comments: IComments) => {
        return itemsTagsToOptions(comments);
    }
);

export const $status = createSelector($i, (_i): IOption[] => {
    return arrayToOptions(['pending', 'approved', 'rejected']);
});

export const $allOptions = createSelector(
    $periods,
    $status,
    $commentsTags,
    (periods, status, commentsTags) => {
        return {
            $periods: periods,
            $status: status,
            $commentsTags: commentsTags,
        } as IAllSelectOptions;
    }
);
