import React from 'react';
import { Wrapper } from './Periscope.style';
import { UnderConstruction, Wip } from '@gdi/ui';

export type PeriscopeProps = {};

export function Periscope(_props: PeriscopeProps) {
  return (
    <Wrapper className='Periscope-wrapper' data-testid='Periscope-wrapper'>
      <Wip />
      <UnderConstruction/>
    </Wrapper>
  );
}

export default Periscope;
