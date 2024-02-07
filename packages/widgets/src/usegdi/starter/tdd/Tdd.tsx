import React from 'react';
import { Wrapper } from './Tdd.style';
import { Wip } from '@gdi/ui';

export type TddProps = {};

export function Tdd(_props: TddProps) {
  return (
    <Wrapper className='Tdd-wrapper' data-testid='Tdd-wrapper'>
      <Wip />
    </Wrapper>
  );
}

export default Tdd;
