import React from 'react';
import { MainOverlay, Wrapper } from './RootPage.style';
import MuxContainer from '../../components/Mux/Mux.container';
import { BarContainer } from '../../containers/Bar.container';
import MuxOverlayContainer from '../../components/MuxOverlay/MuxOverlay.container';

export type RootPageProps = {};

export function RootPage(_props: RootPageProps) {
  return (
    <Wrapper className='RootPage-wrapper' data-testid='RootPage-wrapper'>
      <MuxContainer />
      <BarContainer />
      <MuxOverlayContainer />
    </Wrapper>
  );
}

export default RootPage;
