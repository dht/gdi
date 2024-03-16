export type CalendarSummaryDefinition = {
  startingMonth: number;
  months: MonthDefinition[];
};

export type MonthDefinition = {
  id: number;
  startingDay: number;
  weeks: WeekDefinition[];
};

export type WeekDefinition = {
  id: number;
  weekIndex: number;
  weekOfTheYear: number;
  days: DayDefinition[];
  isInMonth?: boolean;
};

export type DayDefinition = {
  id: string;
  date: Date;
  isWeekend?: boolean;
  isToday?: boolean;
  isInMonth?: boolean;
};
