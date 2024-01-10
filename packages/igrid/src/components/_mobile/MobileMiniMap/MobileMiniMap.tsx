import React from 'react';
import { Screen, Wrapper } from './MobileMiniMap.style';

export type MobileMiniMapProps = {
  screenCount: number;
};

export function MobileMiniMap(props: MobileMiniMapProps) {
  const { screenCount = 2 } = props;

  function renderScreen(index: number) {
    return (
      <Screen key={index} className='index'>
        {index + 1}
      </Screen>
    );
  }

  function renderScreens() {
    const indexes = Array.from(Array(screenCount).keys());
    return indexes.map((index: number) => renderScreen(index));
  }

  return (
    <Wrapper className='MobileMiniMap-wrapper' data-testid='MobileMiniMap-wrapper'>
      {renderScreens()}
    </Wrapper>
  );
}

export default MobileMiniMap;
