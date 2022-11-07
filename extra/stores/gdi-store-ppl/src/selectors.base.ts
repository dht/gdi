import * as raw from './selectors.raw';
import { createSelector } from 'reselect';
import { deltaInYears } from '@gdi/language';

export const $ppl = createSelector(raw.$rawPersons, (ppl) => {
    return Object.values(ppl).map((person) => {
        const { firstName, lastName, dateOfBirth } = person;

        const fullName = `${firstName} ${lastName}`;

        const age = deltaInYears(new Date(dateOfBirth ?? ''));

        return {
            ...person,
            fullName,
            age,
        };
    });
});
