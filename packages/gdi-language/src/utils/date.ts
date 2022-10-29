import { DateTime } from '../types';

export const normalize = (date: DateTime): Date | undefined => {
    if (date instanceof Date) {
        return date;
    }

    try {
        return new Date(date);
    } catch (_e) {}
};
