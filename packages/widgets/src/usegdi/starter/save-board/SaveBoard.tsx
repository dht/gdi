import React from 'react';
import { Wrapper } from './SaveBoard.style';
import { Icon } from '@gdi/ui';

export type SaveBoardProps = {
  onSave: () => void;
};

export function SaveBoard(props: SaveBoardProps) {
  return (
    <Wrapper className='SaveBoard-wrapper' data-testid='SaveBoard-wrapper'>
      <Icon name='upload' color='white' onClick={props.onSave} />
    </Wrapper>
  );
}

export default SaveBoard;
