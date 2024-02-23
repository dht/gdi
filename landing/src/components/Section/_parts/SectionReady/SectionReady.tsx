import React from 'react';
import { Cta, P, Title, Wrapper } from './SectionReady.style';
import { Json } from '../../../../types';

export type SectionReadyProps = {
  config: Json;
};

export function SectionReady(_props: SectionReadyProps) {
  return (
    <Wrapper className='SectionReady-wrapper' data-testid='SectionReady-wrapper'>
      <Title value='Ready to start?' />
      <P>
        Login to GDI and setup your environment or go to GDI's{' '}
        <a href='https://github.com/dht/gdi' target='_blank'>
          Github Page
        </a>{' '}
        and follow the README.md
      </P>
      <Cta className='cta medium'>Login to GDI</Cta>
    </Wrapper>
  );
}

export default SectionReady;
