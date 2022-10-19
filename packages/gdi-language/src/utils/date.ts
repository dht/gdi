import { DateTime } from '../types';

export const normalize = (date: DateTime): Date | null => {
    if (date instanceof Date) {
        return date;
    }

    try {
        return new Date(date);
    } catch (e) {
        return null;
    }
};
