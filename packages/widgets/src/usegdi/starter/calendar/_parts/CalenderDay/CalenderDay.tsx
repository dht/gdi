import React from 'react';
import { Wrapper } from './CalenderDay.style';
import { DayDefinition } from '../../Calendar.type';
import classnames from 'classnames';

export type CalenderDayProps = {
  day: DayDefinition;
};

export function CalenderDay(props: CalenderDayProps) {
  const { day } = props;
  const { date, isToday, isWeekend, isInMonth } = day;

  const className = classnames('CalenderDay-wrapper', {
    today: isToday,
    weekend: isWeekend,
    notInMonth: !isInMonth,
  });

  const dayName = date.getDate();

  return (
    <Wrapper className={className} data-testid='CalenderDay-wrapper'>
      {dayName}
    </Wrapper>
  );
}

export default CalenderDay;
