import { formatObjects } from './formatObjects';

export const rounded = (value: number) => {
    return formatObjects.currency.format(value);
};

export const full = (value: number) => {
    return formatObjects.currencyFull.format(value);
};
