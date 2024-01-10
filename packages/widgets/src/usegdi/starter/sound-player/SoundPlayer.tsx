import React from 'react';
import { Wrapper } from './SoundPlayer.style';
import { Icon } from '@gdi/ui';

export type SoundPlayerProps = {};

export function SoundPlayer(_props: SoundPlayerProps) {
  return (
    <Wrapper className='SoundPlayer-wrapper' data-testid='SoundPlayer-wrapper'>
      <Icon name='graphic_eq' />
    </Wrapper>
  );
}

export default SoundPlayer;
