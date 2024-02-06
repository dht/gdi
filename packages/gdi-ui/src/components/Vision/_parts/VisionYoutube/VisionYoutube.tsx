import React from 'react';
import { Wrapper } from './VisionYoutube.style';
import { VisionFilename } from '../VisionPreview/VisionPreview.components';
import VisionBar from '../VisionBar/VisionBar';
import { actions } from './VisionYoutube.bar';

export type VisionYoutubeProps = {};

export function VisionYoutube(_props: VisionYoutubeProps) {
  return (
    <Wrapper className='VisionYoutube-wrapper' data-testid='VisionYoutube-wrapper'>
      <VisionFilename appIconUrl='/boards/assets/vision-icons/icon_juno.png' value='Juno' />
    </Wrapper>
  );
}

VisionYoutube.panelType = 'window';

export default VisionYoutube;
