import React from 'react';
import { Wrapper } from './BoardsPage.style';
import GalleryContainer from '../../containers/Gallery.container';
import { IBoard } from '@gdi/store-base';

export type BoardsPageProps = {
  boards: IBoard[];
  callbacks: {
    onClick: (board: IBoard) => void;
  };
};

export function BoardsPage(props: BoardsPageProps) {
  const { boards, callbacks } = props;

  return (
    <Wrapper className='BoardsPage-wrapper' data-testid='BoardsPage-wrapper'>
      <GalleryContainer boards={boards} onClick={callbacks.onClick} />
    </Wrapper>
  );
}

export default BoardsPage;
