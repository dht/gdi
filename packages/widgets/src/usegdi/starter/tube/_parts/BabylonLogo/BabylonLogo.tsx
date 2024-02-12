import React from 'react';
import { Logo, Row, Subtitle, Text, Wrapper } from './BabylonLogo.style';

export type BabylonLogoProps = {};

export function BabylonLogo(_props: BabylonLogoProps) {
  return (
    <Wrapper className='BabylonLogo-wrapper' data-testid='BabylonLogo-wrapper'>
      <Row>
        <Logo></Logo>
        <Text>BabylonJS Scenes</Text>
      </Row>
      <Subtitle>
        A collection of visually-stunning{' '}
        <a href='https://www.babylonjs.com/' target='_blank'>
          BabylonJS
        </a>{' '}
        scenes
      </Subtitle>
    </Wrapper>
  );
}

export default BabylonLogo;
