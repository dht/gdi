import React from 'react';
import { Wrapper } from './Tube.style';
import { Wip } from '@gdi/ui';

export type TubeProps = {};

export function Tube(_props: TubeProps) {
  return (
    <Wrapper className='Tube-wrapper' data-testid='Tube-wrapper'>
      <Wip />
    </Wrapper>
  );
}

export default Tube;
