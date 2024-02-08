import React from 'react';
import { Wrapper } from './PplGrid.style';
import { Wip, UnderConstruction } from '@gdi/ui';

export type PplGridProps = {};

export function PplGrid(_props: PplGridProps) {
  return (
    <Wrapper className='PplGrid-wrapper' data-testid='PplGrid-wrapper'>
      <Wip />
      <UnderConstruction />
    </Wrapper>
  );
}

export default PplGrid;
