import React from 'react';
import { Wrapper } from './Tdd.style';
import { UnderConstruction, Wip } from '@gdi/ui';

export type TddProps = {};

export function Tdd(_props: TddProps) {
  return (
    <Wrapper className='Tdd-wrapper' data-testid='Tdd-wrapper'>
      <Wip />
      <UnderConstruction />
    </Wrapper>
  );
}

export default Tdd;
