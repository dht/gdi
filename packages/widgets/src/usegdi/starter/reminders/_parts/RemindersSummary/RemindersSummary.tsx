import React from 'react';
import { Wrapper } from './RemindersSummary.style';

export type RemindersSummaryProps = {};

export function RemindersSummary(_props: RemindersSummaryProps) {
  return <Wrapper className='RemindersSummary-wrapper' data-testid='RemindersSummary-wrapper'></Wrapper>;
}

export default RemindersSummary;
