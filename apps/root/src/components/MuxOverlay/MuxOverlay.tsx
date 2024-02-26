import React from 'react';
import { Wrapper } from './MuxOverlay.style';
import { Route, Routes } from 'react-router-dom';
import { pages as pagesBoards } from '@gdi/app-boards';

export type MuxOverlayProps = {};

export function MuxOverlay(_props: MuxOverlayProps) {
  return (
    <Wrapper className='MuxOverlay-wrapper' data-testid='MuxOverlay-wrapper'>
      <Routes>
        <Route path='/:boardId' element={<pagesBoards.gdi />} />
        <Route path='/:boardId/:itemId' element={<pagesBoards.gdi />} />
      </Routes>
    </Wrapper>
  );
}

export default MuxOverlay;
