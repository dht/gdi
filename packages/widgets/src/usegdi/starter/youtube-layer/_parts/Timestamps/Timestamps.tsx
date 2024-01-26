import React from 'react';
import { Timestamp, Wrapper } from './Timestamps.style';

export type TimestampsProps = {};

export function Timestamps(_props: TimestampsProps) {
  return (
    <Wrapper className='Timestamps-wrapper' data-testid='Timestamps-wrapper'>
      <Timestamp>
        6<span>54</span>
      </Timestamp>
      <Timestamp>
        9<span>24</span>
      </Timestamp>
      <Timestamp>
        16<span>01</span>
      </Timestamp>
    </Wrapper>
  );
}

export default Timestamps;
