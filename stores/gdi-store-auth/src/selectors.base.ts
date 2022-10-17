import { createSelector } from 'reselect';
import { IAuthStore } from './types';
import * as raw from './selectors.raw';

export const $i = (state: { auth: IAuthStore }) => state.auth;
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

export const $users = createSelector(
    raw.$rawUsers,
    raw.$rawRoles,
    (users, roles: Json) => {
        return Object.keys(users).reduce((acc, key) => {
            const user = users[key];
            const role = roles[key];

            acc[key] = {
                ...user,
                role: role?.role,
            };

            return acc;
        }, {} as Record<string, IUser>);
    }
);
