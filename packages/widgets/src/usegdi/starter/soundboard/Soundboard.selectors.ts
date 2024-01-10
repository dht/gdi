import { LocalStore } from './Soundboard.types';
import {
  calcMinutesLeftToday,
  deltaMinutes,
  isToday,
  minutesToTimeText,
  timeTextToMinutes,
  toMinutes,
} from './Soundboard.utils';

export type ChartTimeProps = {
  title?: string;
  data: Record<string, number>;
  colors: Record<string, string>;
  size?: number;
  centerLabel: string;
  centerValue: string;
};

export const timeChartCurrent = (state: LocalStore): ChartTimeProps => {
  const { activities, sessions, localState } = state;
  const { activityId, start } = localState;

  const output: ChartTimeProps = {
    title: 'Current balance',
    data: {},
    colors: {},
    size: 1,
    centerLabel: 'Total',
    centerValue: '',
  };

  let total = 0;

  Object.values(sessions)
    .filter((session) => isToday(session.start))
    .forEach((session) => {
      if (!output.data[session.activityId]) {
        output.data[session.activityId] = 0;
      }

      output.data[session.activityId] += toMinutes(session.duration);
      total += toMinutes(session.duration);
    });

  if (activityId && start) {
    const duration = deltaMinutes(start);

    if (!output.data[activityId]) {
      output.data[activityId] = 0;
    }

    output.data[activityId] += duration;
    total += toMinutes(duration);
  }

  output.colors = Object.values(activities).reduce((acc, activity) => {
    acc[activity.id] = activity.color;
    return acc;
  }, {} as Json);

  output.centerValue = minutesToTimeText(total);

  return output;
};

export const timeChartDesired = (state: LocalStore): ChartTimeProps => {
  const { activities, sessions, localState } = state;

  const output: ChartTimeProps = {
    title: 'Desired balance',
    data: {},
    colors: {},
    size: 1,
    centerLabel: 'Remains',
    centerValue: '',
  };

  output.data = Object.values(activities).reduce((acc, activity) => {
    acc[activity.id] = timeTextToMinutes(activity.todayDesired);
    return acc;
  }, {} as Json);

  output.colors = Object.values(activities).reduce((acc, activity) => {
    acc[activity.id] = activity.color;
    return acc;
  }, {} as Json);

  const minutesLeft = calcMinutesLeftToday(localState.endOfDayTime);
  output.centerValue = minutesToTimeText(minutesLeft);

  return output;
};

export const calcFreeBudgetForToday = (state: LocalStore): number => {
  const { activities, sessions, localState } = state;

  const minutesLeft = calcMinutesLeftToday(localState.endOfDayTime);

  const total = Object.values(sessions)
    .filter((session) => isToday(session.start))
    .reduce((acc, session) => acc + toMinutes(session.duration), 0);

  const desired = Object.values(activities).reduce(
    (acc, activity) => acc + timeTextToMinutes(activity.todayDesired),
    0
  );

  const { activityId, start } = localState;

  let currentDuration = 0;
  if (activityId && start) {
    currentDuration = deltaMinutes(start);
  }

  return minutesLeft + total + currentDuration - desired;
};
