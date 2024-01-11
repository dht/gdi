import React, { useContext } from 'react';
import { Arrow, Wrapper } from './MobileArrows.style';
import Icon from '../../Icon/Icon';
import { GridContext } from '../../Grid/Grid.context';

export type MobileArrowsProps = {};

export function MobileArrows(_props: MobileArrowsProps) {
  const { state, callbacks } = useContext(GridContext);
  const { columns = 0, columnIndex = 0 } = state;

  function onClick(index: number) {
    callbacks.onColumnChange(index);
  }

  function renderLeft() {
    if (!columns || columnIndex === 0) {
      return null;
    }

    return (
      <Arrow className='left' onClick={() => onClick(columnIndex - 1)}>
        <Icon icon='back' size={30} />
      </Arrow>
    );
  }

  function renderRight() {
    if (!columns || columnIndex === columns - 1) {
      return null;
    }

    return (
      <Arrow className='right' onClick={() => onClick(columnIndex + 1)}>
        <Icon icon='forward' size={30} />
      </Arrow>
    );
  }

  return (
    <Wrapper className='MobileArrows-wrapper' data-testid='MobileArrows-wrapper'>
      {renderLeft()}
      {renderRight()}
    </Wrapper>
  );
}

export default MobileArrows;
