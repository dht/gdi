import React from 'react';
import { Wrapper } from './AssetsPage.style';
import { Board } from '@gdi/app-boards';

export type AssetsPageProps = {};

export function AssetsPage(_props: AssetsPageProps) {
  return (
    <Wrapper className='AssetsPage-wrapper' data-testid='AssetsPage-wrapper'>
      <Board id='B-001' darkMode />
    </Wrapper>
  );
}

export default AssetsPage;
