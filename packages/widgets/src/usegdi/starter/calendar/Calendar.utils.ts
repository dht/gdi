import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import duration from 'dayjs/plugin/duration';
import localeData from 'dayjs/plugin/localeData';
import relativeTime from 'dayjs/plugin/relativeTime';
import updateLocale from 'dayjs/plugin/updateLocale';
import weekOfTheYear from 'dayjs/plugin/weekOfYear';
import {
  CalendarDefinition,
  DayDefinition,
  MonthDefinition,
  WeekDefinition,
} from './Calendar.type';

dayjs.extend(advancedFormat);
dayjs.extend(relativeTime);
dayjs.extend(duration);
dayjs.extend(weekOfTheYear);
dayjs.extend(localeData);
dayjs.extend(updateLocale);

export class CalendarBuilder {
  private currentMonth: number = 0;
  private currentWeek: number = 0;

  constructor(private firstDayOfWeek: number) {
    dayjs.updateLocale('en', {
      weekStart: firstDayOfWeek,
    });
  }

  buildMonth(monthId: number, firstDay: dayjs.Dayjs): MonthDefinition {
    this.currentMonth = monthId;

    const startingDate = firstDay.clone().startOf('week');

    const startingDay = startingDate.day();
    const weeks = [];

    for (let weekId = 0; weekId < 6; weekId++) {
      const firstDayOfWeek = dayjs(startingDate).add(weekId, 'week');
      const week = this.buildWeek(weekId, firstDayOfWeek);
      weeks.push(week);
    }

    return {
      id: monthId,
      startingDay,
      weeks,
    };
  }

  buildWeek(weekId: number, firstDayOfWeek: dayjs.Dayjs): WeekDefinition {
    this.currentWeek = weekId;

    const weekOfTheYear = firstDayOfWeek.week();
    const days = [];

    for (let dayDelta = 0; dayDelta < 7; dayDelta++) {
      const day = this.buildDay(dayjs(firstDayOfWeek).add(dayDelta, 'day'));
      days.push(day);
    }

    const isInMonth = days.some((day) => day.isInMonth);

    return {
      id: weekOfTheYear,
      weekOfTheYear,
      weekIndex: this.currentWeek,
      days,
      isInMonth,
    };
  }

  checkIsWeekend(dayIndex: number): boolean {
    const firstDay = this.firstDayOfWeek;
    const weekend1 = (firstDay + 5) % 7;
    const weekend2 = (firstDay + 6) % 7;
    return dayIndex === weekend1 || dayIndex === weekend2;
  }

  buildDay(date: dayjs.Dayjs): DayDefinition {
    const id = date.format('YYYY-MM-DD');

    const isToday = date.isSame(new Date(), 'day');
    const month = date.month();
    const isInMonth = month === this.currentMonth;
    const isWeekend = this.checkIsWeekend(date.day());

    return {
      id,
      date: date.toDate(),
      isToday,
      isInMonth,
      isWeekend,
    };
  }

  build(): CalendarDefinition {
    const date = new Date();
    const startingMonth = date.getMonth();
    const months = [];

    for (let monthDelta = 0; monthDelta < 12; monthDelta++) {
      const firstDay = dayjs(date).add(monthDelta, 'month').startOf('month');

      const monthId = firstDay.month();
      const month = this.buildMonth(monthId, firstDay);
      months.push(month);
    }

    return {
      startingMonth,
      months,
    };
  }
}
