import React, { useContext } from 'react';
import { Inner, Screen, Wrapper } from './MobileMiniMap.style';
import { GridContext } from '../../Grid/Grid.context';
import classnames from 'classnames';

export type MobileMiniMapProps = {
  columnsCount: number;
};

export function MobileMiniMap(props: MobileMiniMapProps) {
  const { state, callbacks } = useContext(GridContext);
  const { columns = 0, columnIndex = 0 } = state;

  function onClick(index: number) {
    callbacks.onColumnChange(index);
  }

  function renderScreen(index: number) {
    const className = classnames({
      selected: index === columnIndex,
    });

    return (
      <Screen key={index} className={className} onClick={() => onClick(index)}>
        {index + 1}
      </Screen>
    );
  }

  function renderScreens() {
    const indexes = Array.from(Array(columns).keys());
    return indexes.map((index: number) => renderScreen(index));
  }

  return (
    <Wrapper
      $count={columns}
      $columnIndex={columnIndex}
      className='MobileMiniMap-wrapper'
      data-testid='MobileMiniMap-wrapper'
    >
      <Inner className='inner'>{renderScreens()}</Inner>
    </Wrapper>
  );
}

export default MobileMiniMap;
