import React from 'react';
import { Image, Wrapper } from './Logo.style';
import { Json } from '../../types';

export type LogoProps = {
  onClick: () => void;
};

export function Logo(props: LogoProps) {
  return (
    <Wrapper className='Logo-wrapper' data-testid='Logo-wrapper' onClick={props.onClick}>
      <Image src='/logo-white.svg' alt='logo' width='100' height='100' />
    </Wrapper>
  );
}

export default Logo;
