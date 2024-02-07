import React from 'react';
import { Wrapper } from './RegexDoc.style';
import { Wip } from '@gdi/ui';

export type RegexDocProps = {};

export function RegexDoc(_props: RegexDocProps) {
  return (
    <Wrapper className='RegexDoc-wrapper' data-testid='RegexDoc-wrapper'>
      <Wip />
    </Wrapper>
  );
}

export default RegexDoc;
