import * as raw from './selectors.raw';
import { createSelector } from 'reselect';
import { IWeatherDailyItem } from './types';

export const $weather = createSelector(
    raw.$now,
    raw.$rawWeatherDaily,
    raw.$rawWeatherHourly,
    (now, weatherDaily) => {
        return Object.values(weatherDaily).find((item: IWeatherDailyItem) => {
            return (
                item.day === now.day &&
                item.week === now.week &&
                item.year === now.year
            );
        });
    }
);
