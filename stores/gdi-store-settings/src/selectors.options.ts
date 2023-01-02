import { createSelector } from 'reselect';
import { minutesThisX } from '@gdi/language';
import { arrayToOptions, optionsPeriod } from 'shared-base';
import businessDomains from './data/businessDomains.json';
import cities from './data/cities.json';

const $i = () => {};

export const $periods = createSelector($i, (_i): IOption[] => {
    const minutes = minutesThisX();
    return optionsPeriod(minutes, true);
});

export const $businessDomains = createSelector($i, (): IOption[] => {
    return arrayToOptions(businessDomains);
});

export const $cities = createSelector($i, (): IOption[] => {
    return arrayToOptions(cities);
});

export const $allOptions = createSelector(
    $periods,
    $businessDomains,
    $cities,
    (periods, businessDomains, cities) => {
        return {
            $businessDomains: businessDomains,
            $cities: cities,
            $periods: periods,
        };
    }
);
