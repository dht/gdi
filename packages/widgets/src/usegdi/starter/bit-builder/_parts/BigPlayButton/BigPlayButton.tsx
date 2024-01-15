import React from 'react';
import { Wrapper } from './BigPlayButton.style';
import { Icon, isMobile } from '@gdi/ui';
import { invokeEvent } from 'shared-base';

export type BigPlayButtonProps = {
  onPlay: () => void;
};

export function BigPlayButton(props: BigPlayButtonProps) {
  return (
    <Wrapper
      className='BigPlayButton-wrapper'
      data-testid='BigPlayButton-wrapper'
      onClick={props.onPlay}
    >
      <Icon name='play_arrow' size={isMobile() ? 40 : 50} color='#aca' />
    </Wrapper>
  );
}

export default BigPlayButton;
