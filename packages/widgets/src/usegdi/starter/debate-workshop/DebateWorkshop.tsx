import React from 'react';
import { Wrapper } from './DebateWorkshop.style';
import { Wip } from '@gdi/ui';

export type DebateWorkshopProps = {};

export function DebateWorkshop(_props: DebateWorkshopProps) {
  return (
    <Wrapper className='DebateWorkshop-wrapper' data-testid='DebateWorkshop-wrapper'>
      <Wip />
    </Wrapper>
  );
}

export default DebateWorkshop;
