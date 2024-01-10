import React from 'react';
import { Image, Wrapper } from './Logo.style';

export type LogoProps = {
  size: number;
  onClick: () => void;
  darkMode?: boolean;
};

export function Logo(props: LogoProps) {
  const { size, darkMode } = props;

  function onClick() {
    props.onClick();
  }

  const src = darkMode ? '/logo-white.svg' : '/logo.svg';

  return (
    <Wrapper className='Logo-wrapper' data-testid='Logo-wrapper' onClick={onClick}>
      <Image $size={size} src={src} draggable={false} />
    </Wrapper>
  );
}

export default Logo;
