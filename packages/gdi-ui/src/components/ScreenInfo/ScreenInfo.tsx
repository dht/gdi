import React from 'react';
import { useWindowSize } from 'react-use';
import { LineHorizontal, LineVertical, Size, Wrapper } from './ScreenInfo.style';

export type ScreenInfoProps = {};

export function ScreenInfo(_props: ScreenInfoProps) {
  const { width, height } = useWindowSize();

  const ratio = width / height;

  const relativeHeight = Math.round(450 / ratio);

  const style: React.CSSProperties = {
    height: relativeHeight + 'rem',
  };

  return (
    <Wrapper className='ScreenInfo-wrapper' data-testid='ScreenInfo-wrapper' style={style}>
      <LineHorizontal />
      <LineVertical size={relativeHeight} />
      <Size>
        {width.toLocaleString()} x {height.toLocaleString()} px
      </Size>
    </Wrapper>
  );
}

export default ScreenInfo;
