import { createSelector } from 'reselect';
import { IComments, ICommentsStore } from './types';
import * as raw from './selectors.raw';

export const $i = (state: { comments: ICommentsStore }) => state.comments;

export const $commentsTags = createSelector(
    raw.$rawComments,
    (comments: IComments) => {
        const allTags: Record<string, boolean> = {};

        Object.values(comments).forEach((person) => {
            const { tags } = person;

            tags.forEach((tag) => {
                allTags[tag] = true;
            });
        });

        return Object.keys(allTags).map((tag) => ({
            id: tag,
            text: tag,
        })) as IOptions;
    }
);

export const $allOptions = createSelector($commentsTags, (commentsTags) => {
    return {
        $commentsTags: commentsTags,
    } as IAllSelectOptions;
});
