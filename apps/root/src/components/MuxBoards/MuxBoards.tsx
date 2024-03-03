import React from 'react';
import { Wrapper } from './MuxBoards.style';
import GalleryContainer from '../../containers/Gallery.container';

export type MuxBoardsProps = {
  boards: IBoard[];
  callbacks: {
    onClick: (board: IBoard) => void;
  };
};

export function MuxBoards(props: MuxBoardsProps) {
  const { boards, callbacks } = props;

  return (
    <Wrapper className='MuxBoards-wrapper' data-testid='MuxBoards-wrapper'>
      <GalleryContainer boards={boards} onClick={callbacks.onClick} />
    </Wrapper>
  );
}

export default MuxBoards;
