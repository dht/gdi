import { DateTime } from '../types';

export const normalize = (date: DateTime): Date | null => {
    if (date instanceof Date) {
        if (!isValidDate(date)) {
            return null;
        }

        return date;
    }

    try {
        const output = new Date(date);

        if (!isValidDate(output)) {
            return null;
        }

        return output;
    } catch (_e) {
        return null;
    }
};

export const isValidDate = (date: Date) => {
    return date.toString() !== 'Invalid Date';
};
