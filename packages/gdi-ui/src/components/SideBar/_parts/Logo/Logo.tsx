import React from 'react';
import { Image, Wrapper } from './Logo.style';
import classnames from 'classnames';

export type LogoProps = {
  minimal?: boolean;
  onClick: () => void;
};

export function Logo(props: LogoProps) {
  const { minimal } = props;

  const className = classnames('Logo-wrapper', {
    minimal,
  });

  return (
    <Wrapper className={className} data-testid='Logo-wrapper' onClick={props.onClick}>
      <Image className='image' src='/logo-white.svg' alt='logo' width='100' height='100' />
    </Wrapper>
  );
}

export default Logo;
