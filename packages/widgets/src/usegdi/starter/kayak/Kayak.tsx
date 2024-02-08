import React from 'react';
import { Wrapper } from './Kayak.style';
import { UnderConstruction, Wip } from '@gdi/ui';

export type KayakProps = {};

export function Kayak(_props: KayakProps) {
  return (
    <Wrapper className='Kayak-wrapper' data-testid='Kayak-wrapper'>
      <Wip />
      <UnderConstruction />
    </Wrapper>
  );
}

export default Kayak;
