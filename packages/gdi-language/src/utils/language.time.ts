import { DateTime } from '../types';
import { normalize } from './date';

export const now = () => {
    return '10:00';
};

export const format = (dateRaw: DateTime) => {
    const date = normalize(dateRaw);

    if (!date) {
        return '';
    }

    return date.toString();
};
