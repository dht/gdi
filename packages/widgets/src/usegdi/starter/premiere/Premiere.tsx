import React from 'react';
import { Wrapper } from './Premiere.style';
import { Wip } from '@gdi/ui';

export type PremiereProps = {};

export function Premiere(_props: PremiereProps) {
  return (
    <Wrapper className='Premiere-wrapper' data-testid='Premiere-wrapper'>
      <Wip />
    </Wrapper>
  );
}

export default Premiere;
