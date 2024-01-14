import React from 'react';
import { Wrapper } from './BigPlayButton.style';
import { Icon } from '@gdi/ui';
import { invokeEvent } from 'shared-base';

export type BigPlayButtonProps = {
  isPlaying: boolean;
};

export function BigPlayButton(props: BigPlayButtonProps) {
  const { isPlaying } = props;

  if (isPlaying) {
    return null;
  }

  function onPlay() {
    invokeEvent('waveform/play');
  }

  return (
    <Wrapper className='BigPlayButton-wrapper' data-testid='BigPlayButton-wrapper' onClick={onPlay}>
      <Icon name='play_arrow' size={50} color='#aca' />
    </Wrapper>
  );
}

export default BigPlayButton;
