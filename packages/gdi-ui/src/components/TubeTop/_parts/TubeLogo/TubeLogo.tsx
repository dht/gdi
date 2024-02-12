import React from 'react';
import { Logo, Row, Subtitle, Text, Wrapper } from './TubeLogo.style';

export type TubeLogoProps = {
  onClick: () => void;
};

export function TubeLogo(props: TubeLogoProps) {
  return (
    <Wrapper className='TubeLogo-wrapper' data-testid='TubeLogo-wrapper' onClick={props.onClick}>
      <Row>
        <Logo></Logo>
        <Text>GdiTube</Text>
      </Row>
      <Subtitle>A collection of schema-based GDI videos</Subtitle>
    </Wrapper>
  );
}

export default TubeLogo;
