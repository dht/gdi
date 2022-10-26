import { createSelector } from 'reselect';
import { IWeatherStore } from './types';
import { soundboard } from '@gdi/store-soundboard';
import { calculateUTC, SimpleDate } from '@gdi/language';

const selectors = soundboard.selectors;

export const $i = (state: { weather: IWeatherStore }) => state.weather;
const $n = (): null => null;
const $o = (): void => {};

export const $rawWeatherState = createSelector($i, (state: IWeatherStore) => state.appStateWeather); // prettier-ignore
export const $rawWeatherLocations = createSelector($i, (state) => state.weatherLocations); // prettier-ignore
export const $rawWeatherHourly = createSelector($i, (state) => state.weatherHourlyItems); // prettier-ignore
export const $rawWeatherDaily = createSelector($i, (state) => state.weatherDailyItems); // prettier-ignore

export const $now = createSelector(
    selectors.raw.$rawSchedulerState,
    (appState) => {
        const { timeDeltaInMinutes } = appState;
        let now = new SimpleDate();

        const utc = calculateUTC(timeDeltaInMinutes);

        let isAlternativeNow = !!timeDeltaInMinutes;

        if (isAlternativeNow) {
            now.addMinutes(timeDeltaInMinutes);
        }
        const info = now.toInfo();

        return {
            week: info.week,
            day: info.dayOfWeek,
            year: info.year,
            dayOfWeekName: info.dayOfWeekName,
            shortDateText: info.dateShortString,
            isAlternativeNow,
            timeDeltaInMinutes,
            ...utc,
        } as NowInfo;
    }
);
