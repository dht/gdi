import React from 'react';
import { MonthHeader, WeekDay, WeekDays, Wrapper } from './CalendarMonth.style';
import { IMonthDefinition, IWeekDefinition } from '../../Calendar.type';
import CalendarWeek from '../CalendarWeek/CalendarWeek';
import dayjs from 'dayjs';
import { weekNumbers } from './CalendarMonth.utils';

export type CalendarMonthProps = {
  month: IMonthDefinition;
  firstDayOfWeek: number;
};

export function CalendarMonth(props: CalendarMonthProps) {
  const { month, firstDayOfWeek } = props;
  const { id, weeks } = month;

  function renderWeek(week: IWeekDefinition) {
    return <CalendarWeek key={week.id} week={week} />;
  }

  function renderWeeks() {
    return weeks.map((week: IWeekDefinition) => renderWeek(week));
  }

  function renderHeader() {
    const monthName = dayjs().month(id).format('MMMM');

    return <MonthHeader>{monthName}</MonthHeader>;
  }

  function renderWeekDays() {
    return weekNumbers(firstDayOfWeek).map((day) => {
      const dayName = dayjs().day(day).format('dd');

      return <WeekDay key={day}>{dayName}</WeekDay>;
    });
  }

  return (
    <Wrapper className='CalendarMonth-wrapper' data-testid='CalendarMonth-wrapper'>
      {renderHeader()}
      <WeekDays>{renderWeekDays()}</WeekDays>
      {renderWeeks()}
    </Wrapper>
  );
}

export default CalendarMonth;
