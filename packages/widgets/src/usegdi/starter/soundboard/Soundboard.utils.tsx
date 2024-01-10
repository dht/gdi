import { guid4 } from 'shared-base';
import { ISession } from './Soundboard.types';
import dayjs from 'dayjs';

export const minutesToTimeText = (minutes: number) => {
  if (minutes === 0) {
    return '-';
  }

  if (minutes < 60) {
    return `${Math.ceil(minutes)}m`;
  }

  const hours = Math.floor(minutes / 60);
  const minutesLeft = minutes % 60;

  return `${hours}h ${Math.ceil(minutesLeft)}m`;
};

export const timeTextToMinutes = (timeText: string) => {
  const regexWithHours = /(\d+h)?\s?(\d+m)?/;
  const match = timeText.match(regexWithHours);

  if (match) {
    const hours = match[1] ? parseInt(match[1]) : 0;
    const minutes = match[2] ? parseInt(match[2]) : 0;

    return hours * 60 + minutes;
  }

  return 0;
};

export function combineReducer(root: any) {
  return (state: any, action: any) => {
    return Object.keys(root).reduce((acc, key) => {
      const reducer = root[key];
      const newState = reducer(state[key], action);

      return {
        ...acc,
        [key]: newState,
      };
    }, {} as any);
  };
}

export const newSession = (activityId: string): ISession => {
  return {
    id: guid4(),
    activityId,
    duration: 0,
    end: 0,
    start: Date.now(),
  };
};

export const toMinutes = (millis: number = 0) => {
  return Math.ceil(millis / 1000 / 60);
};

export const deltaMinutes = (millis: number) => {
  return toMinutes(Date.now() - millis);
};

export const calcMinutesLeftToday = (bedTimeHour: number) => {
  const today = new Date();

  const endOfDay = new Date();
  endOfDay.setHours(bedTimeHour, 0, 0, 0);

  const minutesLeftToday = (endOfDay.getTime() - today.getTime()) / 1000 / 60;

  return minutesLeftToday;
};

export const isToday = (date: Date | number) => {
  const today = new Date();
  const input = new Date(date);

  return (
    input.getDate() === today.getDate() &&
    input.getMonth() === today.getMonth() &&
    input.getFullYear() === today.getFullYear()
  );
};

export const toTime = (date: Date | number) => {
  return dayjs(date).format('HH:mm');
};
