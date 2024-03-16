import React from 'react';
import { H1, Months, Wrapper } from './CalendarSummary.style';
import { CalendarSummaryDefinition, MonthDefinition } from './CalendarSummary.type';
import CalendarMonth from '../CalendarMonth/CalendarMonth';

export type CalendarSummaryProps = {
  definition: CalendarSummaryDefinition;
  firstDayOfWeek: number;
};

export function CalendarSummary(props: CalendarSummaryProps) {
  const { definition, firstDayOfWeek } = props;
  const { months } = definition;

  function renderMonth(month: MonthDefinition) {
    return <CalendarMonth key={month.id} month={month} firstDayOfWeek={firstDayOfWeek} />;
  }

  function renderMonths() {
    return months.map((month: MonthDefinition) => renderMonth(month));
  }

  return (
    <Wrapper className='CalendarSummary-wrapper' data-testid='CalendarSummary-wrapper'>
      <H1>2024</H1>
      <Months>{renderMonths()}</Months>
    </Wrapper>
  );
}

export default CalendarSummary;
