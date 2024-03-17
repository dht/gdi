import React from 'react';
import { Wrapper } from './EventsSummary.style';

export type EventsSummaryProps = {};

export function EventsSummary(_props: EventsSummaryProps) {
  return <Wrapper className='EventsSummary-wrapper' data-testid='EventsSummary-wrapper'></Wrapper>;
}

export default EventsSummary;
