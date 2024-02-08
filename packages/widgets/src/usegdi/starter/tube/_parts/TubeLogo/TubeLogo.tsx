import React from 'react';
import { Logo, Text, Wrapper } from './TubeLogo.style';

export type TubeLogoProps = {
  onClick: () => void;
};

export function TubeLogo(props: TubeLogoProps) {
  return (
    <Wrapper className='TubeLogo-wrapper' data-testid='TubeLogo-wrapper' onClick={props.onClick}>
      <Logo></Logo>
      <Text>GdiTube</Text>
    </Wrapper>
  );
}

export default TubeLogo;
