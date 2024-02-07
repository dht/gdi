import React from 'react';
import { Wrapper } from './PplDetails.style';
import { Wip } from '@gdi/ui';

export type PplDetailsProps = {};

export function PplDetails(_props: PplDetailsProps) {
  return (
    <Wrapper className='PplDetails-wrapper' data-testid='PplDetails-wrapper'>
      <Wip />
    </Wrapper>
  );
}

export default PplDetails;
