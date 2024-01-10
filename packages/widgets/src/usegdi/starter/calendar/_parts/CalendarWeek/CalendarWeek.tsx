import React from 'react';
import { Wrapper } from './CalendarWeek.style';
import { DayDefinition, WeekDefinition } from '../../Calendar.type';
import CalenderDay from '../CalenderDay/CalenderDay';
import classnames from 'classnames';

export type CalendarWeekProps = {
  week: WeekDefinition;
};

export function CalendarWeek(props: CalendarWeekProps) {
  const { week } = props;
  const { days, isInMonth } = week;

  function renderDay(day: DayDefinition) {
    return <CalenderDay key={day.id} day={day} />;
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
