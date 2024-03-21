import { guid4 } from 'shared-base';
import { Json } from '../types';
import { add, getWeek } from './date';

type Item = Json & {
  date: string;
  repeat: string;
};

const mapUnit: any = {
  D: 'days',
  W: 'weeks',
  M: 'months',
  Y: 'years',
};

const defaultCount: any = {
  D: 15,
  W: 12,
  M: 12,
  Y: 3,
};

export const parseItemsRepeat = <T extends Item>(items: T[], forceCount?: number) => {
  const output: T[] = [];

  items.forEach((item) => {
    const { date, repeat } = item;
    output.push(item);

    if (repeat && date) {
      const regex = /([DWM])?x?([0-9]+)?/;
      const match = repeat.match(regex);
      if (!match) return;

      const [_, unit, value] = match;

      const total = forceCount || Number(value) || defaultCount[unit] || 1;
      for (let i = 1; i <= total; i++) {
        const nextDate = add(date, Number(i), mapUnit[unit]);
        const week = getWeek(nextDate);

        const clone: any = {
          ...item,
        };

        clone.date = nextDate;
        clone.week = week;
        clone.isVirtual = true;

        output.push(clone as T);
      }
    }
  });

  return output;
};
