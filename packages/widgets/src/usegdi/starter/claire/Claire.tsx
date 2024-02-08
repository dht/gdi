import React from 'react';
import { Wrapper } from './Claire.style';
import { UnderConstruction, Wip } from '@gdi/ui';

export type ClaireProps = {};

export function Claire(_props: ClaireProps) {
  return (
    <Wrapper className='Claire-wrapper' data-testid='Claire-wrapper'>
      <Wip />
      <UnderConstruction />
    </Wrapper>
  );
}

export default Claire;
