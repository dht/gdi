import { DateTime } from '../types';
import { normalize } from './date';
import { formatObjects } from './formatObjects';

export const time = (date: DateTime) => {
    return formatObjects.time.format(normalize(date));
};
