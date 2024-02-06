import React from 'react';
import { Iframe, Wrapper } from './VisionSafari.style';
import { actions } from './VisionSafari.bar';
import VisionBar from '../VisionBar/VisionBar';

export type VisionSafariProps = {};

export function VisionSafari(_props: VisionSafariProps) {
  return (
    <Wrapper className='VisionSafari-wrapper' data-testid='VisionSafari-wrapper'>
      <VisionBar barType='top-bar' actions={actions} />
    </Wrapper>
  );
}

VisionSafari.panelType = 'top-bar';

export default VisionSafari;
