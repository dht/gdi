import React from 'react';
import { Wrapper } from './Periscope.style';
import { Wip } from '@gdi/ui';

export type PeriscopeProps = {};

export function Periscope(_props: PeriscopeProps) {
  return (
    <Wrapper className='Periscope-wrapper' data-testid='Periscope-wrapper'>
      <Wip />
    </Wrapper>
  );
}

export default Periscope;
