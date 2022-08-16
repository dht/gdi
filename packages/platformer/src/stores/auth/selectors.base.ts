import { createSelector } from 'reselect';
import { IAuthStore } from './initialState';
import * as raw from './selectors.raw';

export const $i = (state: IAuthStore) => state;
export const $n = (): null => null;
export const $o = (): void => {};

export const $me = createSelector(raw.$rawMe, (me) => {
    const { firstName = '', lastName = '' } = me;
    const name = `${firstName} ${lastName}`;

    return {
        ...me,
        name,
    };
});
