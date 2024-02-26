import React from 'react';
import { Image, Wrapper } from './Logo.style';
import { Json } from '../../types';

export type LogoProps = {};

export function Logo(_props: LogoProps) {
  return (
    <Wrapper className='Logo-wrapper' data-testid='Logo-wrapper'>
      <Image src='/logo-white.svg' alt='logo' width='100' height='100' />
    </Wrapper>
  );
}

export default Logo;
