import React from 'react';
import { Wrapper } from './CalendarWeek.style';
import { DayDefinition, WeekDefinition } from '../CalendarSummary/CalendarSummary.type';
import CalendarDay from '../CalendarDay/CalendarDay';
import classnames from 'classnames';

export type CalendarWeekProps = {
  week: WeekDefinition;
};

export function CalendarWeek(props: CalendarWeekProps) {
  const { week } = props;
  const { days, isInMonth } = week;

  function renderDay(day: DayDefinition) {
    return <CalendarDay key={day.id} day={day} />;
  }

  function renderDays() {
    return days.map((day: DayDefinition) => renderDay(day));
  }

  const className = classnames('CalendarWeek-wrapper', {
    hidden: !isInMonth,
  });

  return (
    <Wrapper className={className} data-testid='CalendarWeek-wrapper'>
      {renderDays()}
    </Wrapper>
  );
}

export default CalendarWeek;
