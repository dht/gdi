import React from 'react';
import { Wrapper } from './PplGrid.style';
import { Wip } from '@gdi/ui';

export type PplGridProps = {};

export function PplGrid(_props: PplGridProps) {
  return (
    <Wrapper className='PplGrid-wrapper' data-testid='PplGrid-wrapper'>
      <Wip />
    </Wrapper>
  );
}

export default PplGrid;
