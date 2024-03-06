import React from 'react';
import { Wrapper } from './OneBoardPage.style';
import { Board } from '@gdi/app-boards';
import { useParams } from 'react-router-dom';

export type OneBoardPageProps = {};

export function OneBoardPage(_props: OneBoardPageProps) {
  const { id } = useParams();

  return (
    <Wrapper className='OneBoardPage-wrapper' data-testid='OneBoardPage-wrapper'>
      <Board id={id} />
    </Wrapper>
  );
}

export default OneBoardPage;
