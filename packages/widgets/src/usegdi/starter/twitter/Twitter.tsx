import React from 'react';
import { Wrapper } from './Twitter.style';
import { TwitterEmbed } from 'react-social-media-embed';

export type TwitterProps = {};

export function Twitter(_props: TwitterProps) {
  return (
    <Wrapper className='Twitter-wrapper' data-testid='Twitter-wrapper'>
      <TwitterEmbed url='https://twitter.com/Forbes/status/1665163975544258560' />
    </Wrapper>
  );
}

export default Twitter;
