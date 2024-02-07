import React from 'react';
import { Wrapper } from './Earth.style';
import { Wip } from '@gdi/ui';

export type EarthProps = {};

export function Earth(_props: EarthProps) {
  return (
    <Wrapper className='Earth-wrapper' data-testid='Earth-wrapper'>
      <Wip />
    </Wrapper>
  );
}

export default Earth;
