import React from 'react';
import { Wrapper } from './SectionCta.style';
import { Json } from '../../../../types';

export type SectionCtaProps = {
  config: Json;
};

export function SectionCta(_props: SectionCtaProps) {
  return (
    <Wrapper className='SectionCta-wrapper' data-testid='SectionCta-wrapper'>
      SectionCta
    </Wrapper>
  );
}

export default SectionCta;
