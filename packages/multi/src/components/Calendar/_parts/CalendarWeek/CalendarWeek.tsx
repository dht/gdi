import React from 'react';
import { Wrapper } from './CalendarWeek.style';
import { IDayDefinition, IWeekDefinition } from '../../Calendar.type';
import CalenderDay from '../CalenderDay/CalenderDay';
import classnames from 'classnames';

export type CalendarWeekProps = {
  week: IWeekDefinition;
};

export function CalendarWeek(props: CalendarWeekProps) {
  const { week } = props;
  const { days, isInMonth } = week;

  function renderDay(day: IDayDefinition) {
    return <CalenderDay key={day.id} day={day} />;
  }

  function renderDays() {
    return days.map((day: IDayDefinition) => renderDay(day));
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
