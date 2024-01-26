import React from 'react';
import { Effect, H2, Items, Text, Wrapper } from './VideoEffects.style';
import { videoEffects } from './VideoEffects.data';
import { Icon } from '@gdi/ui';

export type VideoEffectsProps = {};

export function VideoEffects(_props: VideoEffectsProps) {
  function renderEffect(effect: Json) {
    const { iconName, name } = effect;
    return (
      <Effect key={effect.id} className='effect'>
        <Icon name={iconName} size={30} />
        <Text>{name}</Text>
      </Effect>
    );
  }

  function renderEffects() {
    return videoEffects.map((effect: Json) => renderEffect(effect));
  }

  return (
    <Wrapper className='VideoEffects-wrapper' data-testid='VideoEffects-wrapper'>
      <H2>Video Effects</H2>
      <Items>{renderEffects()}</Items>
    </Wrapper>
  );
}

export default VideoEffects;
