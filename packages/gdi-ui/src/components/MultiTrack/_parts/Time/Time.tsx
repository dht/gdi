import React, { useMemo, useState } from 'react';
import { Wrapper } from './Time.style';
import { useCustomEvent } from '../../../../hooks/useCustomEvent';
import { throttle } from 'lodash';
import { timeText } from './Time.utils';

export type TimeProps = {
  currentTime: number;
};

export function Time(props: TimeProps) {
  const { currentTime } = props;

  const time = timeText(currentTime);

  return (
    <Wrapper className='Time-wrapper' data-testid='Time-wrapper'>
      {time.main}
      <span>{time.millis}</span>
    </Wrapper>
  );
}

export default Time;
