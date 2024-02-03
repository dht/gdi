import React from 'react';
import { Bar, Wrapper } from './ProgressBar.style';

export type ProgressBarProps = {};

export function ProgressBar(_props: ProgressBarProps) {
  const style: React.CSSProperties = {
    width: '50%',
    backgroundColor: 'green',
  };

  return (
    <Wrapper className='ProgressBar-wrapper' data-testid='ProgressBar-wrapper'>
      <Bar style={style} />
    </Wrapper>
  );
}

export default ProgressBar;
