export type IActivity = {
  id: string;
  name: string;
  color: string;
  todayDesired: string;
  todaySoFar?: number;
  desiredDurationDay: string;
  desiredDurationWeek: string;
  desiredDurationMonth: string;
  desiredDurationYear: string;
};

export type ISession = {
  id: string;
  activityId: string;
  start: number;
  end: number;
  duration: number;
};

export type ISoundboardState = {
  activityId: string;
  start: number;
  duration: number;
  endOfDayTime: number;
  minutesLeftToday: number;
  sessionId: string;
};

export type IActivities = Record<string, IActivity>;
export type ISessions = Record<string, ISession>;

export type LocalStore = {
  activities: IActivities;
  sessions: ISessions;
  localState: ISoundboardState;
};
