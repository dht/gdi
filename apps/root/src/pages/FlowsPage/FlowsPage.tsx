import React from 'react';
import { Wrapper } from './FlowsPage.style';
import { Board } from '@gdi/app-boards';

export type FlowsPageProps = {};

export function FlowsPage(_props: FlowsPageProps) {
  return (
    <Wrapper className='FlowsPage-wrapper' data-testid='FlowsPage-wrapper'>
      <Board id='B-033' darkMode />
    </Wrapper>
  );
}

export default FlowsPage;
