import bytes from 'bytes';

const DEFAULT_LOCALE = 'en-US';

export const number = {
  normal: (value: number, locale: string = DEFAULT_LOCALE) => {
    return new Intl.NumberFormat(locale).format(value);
  },
  bytes: (value: number) => {
    return bytes(value);
  },
  price: (value: number, locale: string = DEFAULT_LOCALE) => {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: 'USD',
    }).format(value);
  },
  percent: (value: number, locale: string = DEFAULT_LOCALE) => {
    return new Intl.NumberFormat(locale, {
      style: 'percent',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  },
  duration: (value: number, locale: string = DEFAULT_LOCALE) => {
    // 2:40
    const minutes = Math.floor(value / 60);
    const seconds = value - minutes * 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  },
};
