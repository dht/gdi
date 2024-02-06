import React from 'react';
import { Wrapper } from './VisionPreview.style';
import VisionBar from '../VisionBar/VisionBar';
import { actions } from './VisionPreview.bar';
import { VisionFilename } from './VisionPreview.components';

export type VisionPreviewProps = {};

export function VisionPreview(_props: VisionPreviewProps) {
  return (
    <Wrapper className='VisionPreview-wrapper' data-testid='VisionPreview-wrapper'>
      <VisionFilename
        appIconUrl='/boards/assets/vision-icons/icon_freeform.png'
        value='Athena Park'
      />
      <VisionBar barType='bottom-bar' actions={actions} />
    </Wrapper>
  );
}

VisionPreview.panelType = 'bottom-bar';

export default VisionPreview;
