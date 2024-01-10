const getDaySuffix = (day: number) => {
  if (day > 3 && day < 21) return 'th';

  switch (day % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
};

/**
 * Converts unix timestamp / string format date into a readable date. For example, both
 * '2021-09-23 11:27:06.701937+00' and 1632381958000 will turn into 'Sep 23rd, 2021'
 */
export function convertToReadableDate(dateToParse: number | string | null) {
  if (!dateToParse) return '';
  const date = new Date(dateToParse);
  if (!(date instanceof Date)) return '';
  const year = date.toLocaleString('en-US', { year: 'numeric' });
  const month = date.toLocaleString('en-US', { month: 'short' });
  const day = date.toLocaleString('en-US', { day: 'numeric' });

  return `${month} ${day}${getDaySuffix(Number(day))}, ${year}`;
}

export function convertToMonthDay(dateToParse: number | string | null) {
  if (!dateToParse) return '';
  const date = new Date(dateToParse);
  if (!(date instanceof Date)) return '';
  const month = date.toLocaleString('en-US', { month: 'short' });
  const day = date.toLocaleString('en-US', { day: 'numeric' });

  return `${month} ${day}`;
}

/**
 * Calculates how many days are left for the trial
 */
export function convertToReadableDays(dateToParse?: number | string | null) {
  if (!dateToParse) return '';
  const date = new Date(dateToParse);
  if (!(date instanceof Date)) return '';
  const today = new Date();
  const oneDay = 1000 * 60 * 60 * 24;
  const result = Math.ceil((date.getTime() - today.getTime()) / oneDay);
  if (result < 0) return 0;
  return result;
}
