import React from 'react';
import { Wrapper } from './Events.style';
import { Multi } from 'multi';
import { multi, initialView, views } from './_multi';
import EventsSummary from './_parts/EventsSummary/EventsSummary.container';

export type EventsProps = {
  callbacks: {
    onAction: (verb: string, params?: Json) => void;
    onItemAction: (id: string, verb: string, params?: Json) => void;
  };
  data: Json[];
};

export function Events(props: EventsProps) {
  const { data, callbacks } = props;

  return (
    <Wrapper className='Events-wrapper' data-testid='Events-wrapper'>
      <Multi //
        initialView={initialView}
        views={views}
        config={multi}
        data={data}
        callbacks={callbacks}
        darkMode
      >
        <EventsSummary />
      </Multi>
    </Wrapper>
  );
}

export default Events;
