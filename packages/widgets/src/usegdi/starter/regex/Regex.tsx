import React from 'react';
import { Wrapper } from './Regex.style';
import { UnderConstruction, Wip } from '@gdi/ui';

export type RegexProps = {};

export function Regex(_props: RegexProps) {
  return (
    <Wrapper className='Regex-wrapper' data-testid='Regex-wrapper'>
      <Wip />
      <UnderConstruction />
    </Wrapper>
  );
}

export default Regex;
