import React from 'react';
import { Wrapper } from './Calendar.style';
import { Multi } from 'multi';
import { multi, initialView, views } from './_multi';
import CalendarSummary from './_parts/CalendarSummary/CalendarSummary.container';

export type CalendarProps = {
  callbacks: {
    onAction: (verb: string, params?: Json) => void;
    onItemAction: (id: string, verb: string, params?: Json) => void;
  };
  data: Json[];
};

export function Calendar(props: CalendarProps) {
  const { data, callbacks } = props;

  return (
    <Wrapper className='Calendar-wrapper' data-testid='Calendar-wrapper'>
      <Multi //
        initialView={initialView}
        views={views}
        config={multi}
        data={data}
        callbacks={callbacks}
        darkMode
      >
        <CalendarSummary />
      </Multi>
    </Wrapper>
  );
}

export default Calendar;
