import React from 'react';
import { Wrapper } from './Pinterest.style';
import { PinterestEmbed } from 'react-social-media-embed';

export type PinterestProps = {};

export function Pinterest(_props: PinterestProps) {
  return (
    <Wrapper className='Pinterest-wrapper' data-testid='Pinterest-wrapper'>
      <PinterestEmbed url='https://www.pinterest.com/pin/394065036158025206/' />
    </Wrapper>
  );
}

export default Pinterest;
