import * as raw from './selectors.raw';
import { createSelector } from 'reselect';
import { deltaInYears } from '@gdi/language';

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

                const age = deltaInYears(new Date(dateOfBirth ?? ''));

                return {
                    ...person,
                    fullName,
                    age,
                };
            });
    }
);
