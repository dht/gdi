import { formatObjects } from './formatObjects';

/*
  compactDisplay: 'short' | 'long',
  currency: 'ILS' | 'USD' | 'EUR',
  currencyDisplay: 'symbol' | 'narrowSymbol' | 'code' | name,
  currencySign: 'accounting' | 'standard,
  localeMatcher: 'lookup' | 'best fit',
  notation: 'standard' | 'scientific' | 'engineering' | 'compact',
  signDisplay: 'auto' | 'always' | 'exceptZero' | 'negative' | 'never',
  style: 'decimal' | 'currency' | 'percent' | 'unit',
  unitDisplay: 'short' | 'narrow' | 'long',
  useGrouping: 'always' | 'auto' | 'min2', false, true,
  roundingMode: 'ceil' | 'floor' | 'expand' | 'trunc' | 'halfCeil' | 'halfFloor' | 'halfExpand' | 'halfTrunc' | 'halfEven',
  roundingPriority: 'auto' | 'morePrecision' | 'lessPrecision',
  roundingIncrement: 1, 2, 5, 10, 20, 25, 50, 100, 200, 250, 500, 1000, 2000, 2500, 5000
  trailingZeroDisplay: 'auto' | 'stripIfInteger'
  minimumIntegerDigits
  minimumFractionDigits
  maximumFractionDigits
  minimumSignificantDigits
  maximumSignificantDigits
*/

export const rounded = (value: number) => {
    return formatObjects.number.format(value);
};

export const full = (value: number) => {
    return formatObjects.numberFull.format(value);
};

/*
acre
bit
byte
celsius
centimeter
day
degree
fahrenheit
fluid-ounce
foot
gallon
gigabit
gigabyte
gram
hectare
hour
inch
kilobit
kilobyte
kilogram
kilometer
liter
megabit
megabyte
meter
mile
mile-scandinavian
milliliter
millimeter
millisecond
minute
month
ounce
percent
petabyte
pound
second
stone
terabit
terabyte
week
yard
year
*/
