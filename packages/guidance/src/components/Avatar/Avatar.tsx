import React from 'react';
import { Wrapper } from './Avatar.style';
import { Scene, useGlbReady } from 'isokit2';
import { environment } from './Avatar.environment';

export type AvatarProps = {};

export function Avatar(_props: AvatarProps) {
  return (
    <Wrapper className='Avatar-wrapper' data-testid='Avatar-wrapper'>
      <Scene
        isLoading={false}
        showToolbox={false}
        freeMove={false}
        hideBase
        environment={environment}
      />
    </Wrapper>
  );
}

export default Avatar;
