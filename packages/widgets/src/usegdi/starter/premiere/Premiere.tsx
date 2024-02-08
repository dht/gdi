import React from 'react';
import { Wrapper } from './Premiere.style';
import { Wip, UnderConstruction } from '@gdi/ui';

export type PremiereProps = {};

export function Premiere(_props: PremiereProps) {
  return (
    <Wrapper className='Premiere-wrapper' data-testid='Premiere-wrapper'>
      <Wip />
      <UnderConstruction />
    </Wrapper>
  );
}

export default Premiere;
