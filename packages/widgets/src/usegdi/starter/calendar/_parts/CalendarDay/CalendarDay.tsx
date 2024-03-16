import React from 'react';
import { Wrapper } from './CalendarDay.style';
import { DayDefinition } from '../CalendarSummary/CalendarSummary.type';
import classnames from 'classnames';

export type CalendarDayProps = {
  day: DayDefinition;
};

export function CalendarDay(props: CalendarDayProps) {
  const { day } = props;
  const { date, isToday, isWeekend, isInMonth } = day;

  const className = classnames('CalendarDay-wrapper', {
    today: isToday,
    weekend: isWeekend,
    notInMonth: !isInMonth,
  });

  const dayName = date.getDate();

  return (
    <Wrapper className={className} data-testid='CalendarDay-wrapper'>
      {dayName}
    </Wrapper>
  );
}

export default CalendarDay;
