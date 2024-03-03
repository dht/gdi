import React from 'react';
import { H1, Months, Wrapper } from './Calendar.style';
import { ICalendarDefinition, IMonthDefinition } from './Calendar.type';
import CalendarMonth from './_parts/CalendarMonth/CalendarMonth';

export type CalendarProps = {
  definition: ICalendarDefinition;
  firstDayOfWeek: number;
};

export function Calendar(props: CalendarProps) {
  const { definition, firstDayOfWeek } = props;
  const { months } = definition;

  function renderMonth(month: IMonthDefinition) {
    return <CalendarMonth key={month.id} month={month} firstDayOfWeek={firstDayOfWeek} />;
  }

  function renderMonths() {
    return months.map((month: IMonthDefinition) => renderMonth(month));
  }

  return (
    <Wrapper className='Calendar-wrapper' data-testid='Calendar-wrapper'>
      <H1>2024</H1>
      <Months>{renderMonths()}</Months>
    </Wrapper>
  );
}

export default Calendar;
