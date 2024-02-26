import React from 'react';
import { Wrapper } from './MuxPage.style';
import MuxContainer from '../../components/Mux/Mux.container';
import MuxOverlayContainer from '../../components/MuxOverlay/MuxOverlay.container';

export type MuxPageProps = {};

export function MuxPage(_props: MuxPageProps) {
  return (
    <Wrapper className='MuxPage-wrapper' data-testid='MuxPage-wrapper'>
      <MuxContainer />
      <MuxOverlayContainer />
    </Wrapper>
  );
}

export default MuxPage;
