import * as raw from './selectors.raw';
import { createSelector } from 'reselect';
import { differenceInYears } from '@gdi/language';

const now = new Date();

export const $ppl = createSelector(
    raw.$rawPersons,
    raw.$rawPplState,
    (ppl, appState) => {
        const { currentCategory } = appState;
        return Object.values(ppl)
            .filter((person) => {
                return (
                    person.category === currentCategory ||
                    currentCategory === 'all'
                );
            })
            .map((person) => {
                const { firstName, lastName, dateOfBirth } = person;

                const fullName = `${firstName} ${lastName}`;

                const age = differenceInYears(now, new Date(dateOfBirth ?? ''));

                return {
                    ...person,
                    fullName,
                    age,
                };
            });
    }
);
