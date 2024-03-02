import React from 'react';
import { Wrapper } from './Events.style';

export type EventsProps = {};

export function Events(_props: EventsProps) {
  return <Wrapper className='Events-wrapper' data-testid='Events-wrapper'></Wrapper>;
}

export default Events;
