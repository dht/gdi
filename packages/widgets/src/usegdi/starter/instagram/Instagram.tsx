import React from 'react';
import { Wrapper } from './Instagram.style';
import { InstagramEmbed } from 'react-social-media-embed';

export type InstagramProps = {};

export function Instagram(_props: InstagramProps) {
  return (
    <Wrapper className='Instagram-wrapper' data-testid='Instagram-wrapper'>
      <InstagramEmbed url='https://www.instagram.com/p/CtDT6r1Pu19/' />
    </Wrapper>
  );
}

export default Instagram;
