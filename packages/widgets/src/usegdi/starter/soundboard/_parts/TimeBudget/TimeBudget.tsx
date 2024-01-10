import React from 'react';
import { Label, Value, Wrapper } from './TimeBudget.style';
import { minutesToTimeText } from '../../Soundboard.utils';

export type TimeBudgetProps = {
  freeBudget: number;
};

export function TimeBudget(props: TimeBudgetProps) {
  const { freeBudget } = props;

  return (
    <Wrapper className='TimeBudget-wrapper' data-testid='TimeBudget-wrapper'>
      <Value>{minutesToTimeText(freeBudget)}</Value>
      <Label>free</Label>
    </Wrapper>
  );
}

export default TimeBudget;
