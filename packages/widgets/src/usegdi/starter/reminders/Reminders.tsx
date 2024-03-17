import React from 'react';
import { Wrapper } from './Reminders.style';
import { Multi } from 'multi';
import { multi, initialView, views } from './_multi';
import RemindersSummary from './_parts/RemindersSummary/RemindersSummary.container';

export type RemindersProps = {
  callbacks: {
    onAction: (verb: string, params?: Json) => void;
    onItemAction: (id: string, verb: string, params?: Json) => void;
  };
  data: Json[];
};

export function Reminders(props: RemindersProps) {
  const { data, callbacks } = props;

  return (
    <Wrapper className='Reminders-wrapper' data-testid='Reminders-wrapper'>
      <Multi //
        initialView={initialView}
        views={views}
        config={multi}
        data={data}
        callbacks={callbacks}
        darkMode
      >
        <RemindersSummary />
      </Multi>
    </Wrapper>
  );
}

export default Reminders;
