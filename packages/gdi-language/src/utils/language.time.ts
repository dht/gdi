import { DateTime } from '../types';
import { normalize } from './date';
import { formatObjects } from './formatObjects';
import { toDuration } from './language.relative';

export const time = (date: DateTime) => {
    return formatObjects.time.format(normalize(date) ?? new Date());
};

export const minutesPassed = (date: DateTime) => {
    const now = new Date();
    const dateNormalized = normalize(date);

    if (!dateNormalized) {
        return;
    }

    const diff = now.getTime() - dateNormalized.getTime();
    const minutes = Math.floor(diff / 1000 / 60);
    return minutes;
};

export const minutesToDuration = (minutes: number) => {
    return toDuration(minutes * 60);
};

export const addMinutes = (date: DateTime, minutes: number) => {
    const dateNormalized = normalize(date);

    if (!dateNormalized) {
        return;
    }

    return new Date(dateNormalized.getTime() + minutes * 60 * 1000);
};

export const myUTC = () => {
    return -new Date().getTimezoneOffset() / 60;
};

export const calculateUTC = (deltaInMinutes: number) => {
    let utcPlus = Math.round(myUTC() + deltaInMinutes / 60);

    if (utcPlus < -11) {
        utcPlus += 24;
    }

    const sign = utcPlus >= 0 ? '+' : '-';
    const utc = `${sign}${Math.abs(utcPlus)}`;
    const cities = (timezones as any)[utc];
    const randomCity = cities[0];

    return {
        alternativeUtc: `UTC${utc}`,
        alternativeCity: randomCity,
    };
};

export const timezones = {
    '-12': ['Christchurch'],
    '-11': ['Pago Pago'],
    '-10': ['Honolulu'],
    '-9': ['French Polynesia'],
    '-8': ['San Francisco'],
    '-7': ['Whitehorse'],
    '-6': ['Austin'],
    '-5': ['New York'],
    '-4': ['Barbados'],
    '-3': ['Buenos Aires'],
    '-2': ['Itamaracá'],
    '-1': ['Santa Cruz'],
    '+0': ['London'],
    '+1': ['Amsterdam'],
    '+2': ['Cairo'],
    '+3': ['Tel-Aviv'],
    '+4': ['Tbilisi'],
    '+5': ['Maldives'],
    '+6': ['Mumbai'],
    '+7': ['Bankok'],
    '+8': ['Beijing'],
    '+9': ['Tokyo'],
    '+10': ['Melbourne'],
    '+11': ['Papa New Guinea'],
    '+12': ['Christchurch'],
};
